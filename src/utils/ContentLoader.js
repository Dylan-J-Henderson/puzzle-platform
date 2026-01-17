/**
 * @file ContentLoader.js
 * @description Utility class for loading and caching content from external files.
 * Provides centralized content management with built-in caching and error handling 
 * for markdown and text files.
 * 
 * @module utils/ContentLoader
 * 
 * @example
 * // Import and use the exported instance
 * import { contentLoader } from './utils/ContentLoader';
 * 
 * const content = await contentLoader.load('/content/readme.md');
 * 
 * @example
 * // Create a new instance if needed
 * const loader = new ContentLoader();
 * const text = await loader.load('/content/disclaimer.md');
 */

/**
 * Class for loading and caching content from external files.
 * 
 * Features:
 * - Automatic caching of loaded content to minimize network requests
 * - Preloading capabilities for improved performance
 * - Cache management utilities (clear cache, check cache status)
 * - Comprehensive error handling with console logging
 * - Returns null on error for graceful degradation
 * 
 * The class maintains an in-memory cache (Map) of all successfully loaded 
 * content. Once content is loaded, subsequent requests for the same path 
 * return the cached version unless the cache is cleared.
 * 
 * Note: This implementation does not prevent duplicate parallel requests 
 * for the same file. Multiple simultaneous calls to load() with the same 
 * path will result in multiple fetch requests until the first completes.
 * 
 * @class
 * 
 * @example
 * // Basic usage
 * const loader = new ContentLoader();
 * const markdown = await loader.load('/content/help.md');
 * 
 * @example
 * // Check if content loaded successfully
 * const content = await loader.load('/content/data.md');
 * if (content === null) {
 *   console.log('Failed to load content');
 * }
 * 
 * @example
 * // Preload multiple files
 * await loader.preload([
 *   '/content/intro.md',
 *   '/content/tutorial.md',
 *   '/content/faq.md'
 * ]);
 * 
 * @example
 * // Clear cache and reload
 * loader.clearCache();
 * const freshContent = await loader.load('/content/data.md');
 */
class ContentLoader {
  constructor() {
    this.cache = new Map();
  }

  /**
   * Loads content from a file at the specified path.
   * 
   * If the content has been previously loaded and cached, returns the cached 
   * version immediately. Otherwise, fetches the content via HTTP, caches it,
   * and returns it.
   * 
   * @param {string} path - Path to the content file (relative or absolute URL)
   * @returns {Promise<string|null>} The loaded content as a string, or null if loading fails
   * 
   * @throws Does not throw - errors are caught and logged to console
   * 
   * @example
   * const content = await loader.load('/content/readme.md');
   * if (content) {
   *   console.log('Content loaded successfully');
   * }
   */
  async load(path) {
    if (this.cache.has(path)) {
      return this.cache.get(path);
    }

    try {
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Failed to load content: ${response.statusText}`);
      }
      const content = await response.text();
      this.cache.set(path, content);
      return content;
    } catch (error) {
      console.error(`Error loading content from ${path}:`, error);
      return null;
    }
  }

  /**
   * Clears all cached content.
   * 
   * After calling this method, subsequent load() calls will fetch content 
   * from the network again rather than returning cached versions.
   * 
   * @returns {void}
   * 
   * @example
   * loader.clearCache();
   * // Next load() call will fetch fresh content
   */
  clearCache() {
    this.cache.clear();
  }

  /**
   * Preloads multiple content files into the cache.
   * 
   * Initiates parallel fetch requests for all specified paths. Useful for 
   * loading content in advance to improve perceived performance. All requests 
   * are processed concurrently via Promise.all().
   * 
   * Failed requests are handled gracefully - they won't reject the entire 
   * preload operation but will log errors to the console.
   * 
   * @param {string[]} paths - Array of file paths to preload
   * @returns {Promise<void>} Resolves when all preload attempts complete
   * 
   * @example
   * // Preload content during app initialization
   * await loader.preload([
   *   '/content/intro.md',
   *   '/content/tutorial.md'
   * ]);
   * 
   * // Content is now cached and ready for instant access
   * const intro = await loader.load('/content/intro.md'); // Returns immediately
   */
  async preload(paths) {
    const promises = paths.map(path => this.load(path));
    await Promise.all(promises);
  }
}

export const contentLoader = new ContentLoader();