/**
 * @file popupStyles.js
 * @description Configuration file for popup styling and content paths.
 * Centralizes all popup-related configuration for easy maintenance and consistency.
 * 
 * @module config/popupStyles
 * 
 * This file contains:
 * - Visual style configurations for different popup types
 * - Content file paths for markdown-based popups
 * - Reusable styling constants
 * 
 * @example
 * // Using popup styles
 * import { POPUP_STYLES } from './config/popupStyles';
 * const style = POPUP_STYLES.warning;
 * 
 * @example
 * // Using content paths
 * import { CONTENT_PATHS } from './config/popupStyles';
 * const content = await fetch(CONTENT_PATHS.disclaimer);
 */

/**
 * Popup style configurations for different message types
 * 
 * Each type provides a complete set of Tailwind CSS classes for consistent
 * styling across the application. Modifications here will affect all popups
 * of the corresponding type.
 * 
 * @constant {Object.<string, PopupStyleConfig>}
 * 
 * @property {PopupStyleConfig} warning - Yellow theme for warnings and disclaimers
 * @property {PopupStyleConfig} info - Blue theme for informational messages
 * @property {PopupStyleConfig} success - Green theme for success confirmations
 * @property {PopupStyleConfig} error - Red theme for error messages
 * 
 * @example
 * // Access a specific style configuration
 * const warningStyle = POPUP_STYLES.warning;
 * console.log(warningStyle.titleColor); // 'text-yellow-400'
 * 
 * @example
 * // Use in a component
 * const getPopupStyle = (type) => {
 *   return POPUP_STYLES[type] || POPUP_STYLES.info;
 * };
 */
export const POPUP_STYLES = {
  /**
   * Warning style - Used for cautions, disclaimers, and important notices
   * Color: Yellow/Amber theme
   */
  warning: {
    border: 'border-yellow-500/30',
    gradient: 'from-gray-900 to-black',
    titleColor: 'text-yellow-400',
    buttonBg: 'bg-yellow-500/20 hover:bg-yellow-500/30',
    buttonText: 'text-yellow-400',
    buttonBorder: 'border-yellow-500/30'
  },

  /**
   * Info style - Used for general information and announcements
   * Color: Blue theme
   */
  info: {
    border: 'border-blue-500/30',
    gradient: 'from-gray-900 to-black',
    titleColor: 'text-blue-400',
    buttonBg: 'bg-blue-500/20 hover:bg-blue-500/30',
    buttonText: 'text-blue-400',
    buttonBorder: 'border-blue-500/30'
  },

  /**
   * Success style - Used for confirmations and achievements
   * Color: Green theme
   */
  success: {
    border: 'border-green-500/30',
    gradient: 'from-gray-900 to-black',
    titleColor: 'text-green-400',
    buttonBg: 'bg-green-500/20 hover:bg-green-500/30',
    buttonText: 'text-green-400',
    buttonBorder: 'border-green-500/30'
  },

  /**
   * Error style - Used for error messages and critical alerts
   * Color: Red theme
   */
  error: {
    border: 'border-red-500/30',
    gradient: 'from-gray-900 to-black',
    titleColor: 'text-red-400',
    buttonBg: 'bg-red-500/20 hover:bg-red-500/30',
    buttonText: 'text-red-400',
    buttonBorder: 'border-red-500/30'
  }
};

/**
 * Content file paths for markdown-based popups
 * 
 * All paths are relative to the public directory. Files should be placed
 * in public/content/ for proper serving by the development and production servers.
 * 
 * @constant {Object.<string, string>}
 * 
 * @property {string} disclaimer - Path to disclaimer markdown file
 * @property {string} welcome - Path to welcome/tutorial markdown file
 * @property {string} instructions - Path to instructions markdown file
 * 
 * @example
 * // Load disclaimer content
 * const content = await fetch(CONTENT_PATHS.disclaimer)
 *   .then(res => res.text());
 * 
 * @example
 * // Use with ContentLoader
 * import { ContentLoader } from '../utils/ContentLoader';
 * const loader = ContentLoader.getInstance();
 * const instructions = await loader.load(CONTENT_PATHS.instructions);
 */
export const CONTENT_PATHS = {
  /**
   * Disclaimer content file
   * Shows project status and feature availability
   */
  disclaimer: '/content/disclaimer.md',

  /**
   * Welcome/tutorial content file
   * Introduces users to the application (future implementation)
   */
  welcome: '/content/welcome.md',

  /**
   * Instructions content file
   * Detailed usage instructions (future implementation)
   */
  instructions: '/content/instructions.md'
};