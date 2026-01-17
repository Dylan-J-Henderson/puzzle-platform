/**
 * @file PopupStyles.js
 * @description Configuration file for popup styling and static content.
 * Centralizes all popup-related configuration for easy maintenance and consistency.
 * 
 * @module config/popupStyles
 * 
 * This file contains:
 * - Visual style configurations for different popup types
 * - Imported markdown content for popups
 * - Reusable styling constants
 * 
 * @example
 * // Using popup styles
 * import { POPUP_STYLES } from './config/PopupStyles';
 * const style = POPUP_STYLES.warning;
 * 
 * @example
 * // Using content
 * import { CONTENT } from './config/PopupStyles';
 * const disclaimerText = CONTENT.disclaimer;
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
 * Import markdown files as raw text using Vite's ?raw suffix
 * 
 * These imports load the content of markdown files at build time,
 * making them immediately available without async loading.
 * 
 * Files are located in: src/content/
 * 
 * @see {@link https://vitejs.dev/guide/assets.html#importing-asset-as-string|Vite Asset Handling}
 */
import disclaimerContent from '../content/disclaimer.md?raw';
import welcomeContent from '../content/welcome.md?raw';
import instructionsContent from '../content/instructions.md?raw';

/**
 * Static markdown content for popups
 * 
 * All content is imported at build time and available synchronously.
 * Content is loaded from markdown files in the src/content/ directory.
 * 
 * @constant {Object.<string, string>}
 * 
 * @property {string} disclaimer - Disclaimer markdown content (project status, feature availability)
 * @property {string} welcome - Welcome/tutorial markdown content
 * @property {string} instructions - Usage instructions markdown content
 * 
 * @example
 * // Use in a component
 * import { CONTENT } from './config/popupStyles';
 * 
 * const MyComponent = () => {
 *   return <MarkdownRenderer markdown={CONTENT.disclaimer} />;
 * };
 * 
 * @example
 * // Access specific content
 * const disclaimerText = CONTENT.disclaimer;
 * console.log(disclaimerText); // Full markdown string
 */
export const CONTENT = {
  disclaimer: disclaimerContent,
  welcome: welcomeContent,
  instructions: instructionsContent
};