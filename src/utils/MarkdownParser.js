/**
 * @file MarkdownParser.js
 * @description Function for parsing markdown content into structured data.
 * Converts markdown syntax into JavaScript objects that can be rendered 
 * by React components.
 * 
 * @module utils/MarkdownParser
 * 
 * Supported Syntax:
 * - Headings: # H1, ## H2, ### H3
 * - Lists: - item or • item (consecutive items grouped into single list)
 * - Paragraphs: Plain text lines
 * 
 * Limitations:
 * - Does not support nested lists
 * - Does not support inline markdown (bold, italic, links, code)
 * - Does not support code blocks, blockquotes, or tables
 * - Empty lines are ignored (not preserved as spacing)
 * - Each non-list line becomes a separate paragraph (no multi-line paragraphs)
 * 
 * @example
 * import { MarkdownParser } from './utils/MarkdownParser';
 * 
 * const markdown = `
 * ## Title
 * 
 * This is a paragraph.
 * 
 * - List item 1
 * - List item 2
 * `;
 * 
 * const elements = MarkdownParser(markdown);
 * // Returns: [
 * //   { type: 'heading', text: 'Title', level: 2 },
 * //   { type: 'paragraph', text: 'This is a paragraph.' },
 * //   { type: 'list', items: ['List item 1', 'List item 2'] }
 * // ]
 */

/**
 * Parses markdown content into an array of structured elements.
 * 
 * The parser processes markdown line-by-line and converts each line into
 * a structured element object. Consecutive list items are automatically
 * grouped into a single list element.
 * 
 * Element Types:
 * - Heading: { type: 'heading', text: string, level: 1|2|3 }
 * - List: { type: 'list', items: string[] }
 * - Paragraph: { type: 'paragraph', text: string }
 * 
 * Processing Rules:
 * - Lines are trimmed of leading/trailing whitespace
 * - Empty lines are skipped
 * - Consecutive list items (- or •) are grouped into one list element
 * - Non-empty lines that don't match heading or list syntax become paragraphs
 * 
 * @function
 * @param {string} markdown - The markdown content to parse
 * @returns {Array<Object>|null} Array of parsed elements, or null if input is falsy
 * 
 * @example
 * // Basic parsing
 * const elements = MarkdownParser('# Hello\n\nWorld');
 * // Returns: [
 * //   { type: 'heading', text: 'Hello', level: 1 },
 * //   { type: 'paragraph', text: 'World' }
 * // ]
 * 
 * @example
 * // List grouping
 * const elements = MarkdownParser('- Item 1\n- Item 2\n\nText');
 * // Returns: [
 * //   { type: 'list', items: ['Item 1', 'Item 2'] },
 * //   { type: 'paragraph', text: 'Text' }
 * // ]
 * 
 * @example
 * // Null input handling
 * const elements = MarkdownParser('');
 * // Returns: null
 * 
 * @example
 * // Mixed content
 * const markdown = `
 * # Main Title
 * ## Subtitle
 * 
 * Introduction paragraph.
 * 
 * - Feature 1
 * - Feature 2
 * • Feature 3
 * 
 * ### Section
 * 
 * More text here.
 * `;
 * 
 * const elements = MarkdownParser(markdown);
 * // Returns structured array with headings, lists, and paragraphs
 */
export const MarkdownParser = (markdown) => {
  if (!markdown) return null;

  const lines = markdown.trim().split('\n');
  const elements = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Skip empty lines
    if (!line) continue;
    
    // Heading
    if (line.startsWith('# ')) {
      elements.push({ type: 'heading', text: line.slice(2), level: 1 });
    } else if (line.startsWith('## ')) {
      elements.push({ type: 'heading', text: line.slice(3), level: 2 });
    } else if (line.startsWith('### ')) {
      elements.push({ type: 'heading', text: line.slice(4), level: 3 });
    }

    // List item (dash or bullet)
    else if (line.startsWith('- ') || line.startsWith('• ')) {
      const text = line.startsWith('- ') ? line.slice(2) : line.slice(2);

      // Check if previous element is a list; if so, append to it
      if (!elements.length || elements[elements.length - 1].type !== 'list') {
        elements.push({ type: 'list', items: [text] });
      } else {
        elements[elements.length - 1].items.push(text);
      }
    }
    
    // Paragraph (any other non-empty line)
    else {
      elements.push({ type: 'paragraph', text: line });
    }
  }
  
  return elements;
};