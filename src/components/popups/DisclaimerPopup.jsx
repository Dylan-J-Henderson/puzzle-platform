/**
 * @file DisclaimerPopup.jsx
 * @description Disclaimer popup component that loads and displays markdown content
 * from an external file. Shows work-in-progress notices and feature status to users.
 * 
 * @module components/popups/DisclaimerPopup
 * @requires react
 * @requires ../ui/InfoPopup
 * @requires ../ui/MarkdownRenderer
 * @requires ../../utils/ContentLoader
 * @requires ../../config/popupStyles
 * 
 * Content Source:
 * - Loads from: public/content/disclaimer.md
 * - Falls back to inline content if file unavailable
 * 
 * @example
 * // Basic usage in App component
 * const App = () => {
 *   const [showDisclaimer, setShowDisclaimer] = useState(true);
 *   
 *   return (
 *     <div>
 *       <DisclaimerPopup 
 *         isVisible={showDisclaimer} 
 *         onClose={() => setShowDisclaimer(false)} 
 *       />
 *     </div>
 *   );
 * };
 * 
 * @example
 * // With localStorage persistence
 * const App = () => {
 *   const [showDisclaimer, setShowDisclaimer] = useState(() => {
 *     return !localStorage.getItem('disclaimerAcknowledged');
 *   });
 *   
 *   const handleClose = () => {
 *     localStorage.setItem('disclaimerAcknowledged', 'true');
 *     setShowDisclaimer(false);
 *   };
 *   
 *   return <DisclaimerPopup isVisible={showDisclaimer} onClose={handleClose} />;
 * };
 */

import React, { useState, useEffect } from 'react';
import { InfoPopup } from '../ui/InfoPopup';
import { MarkdownRenderer } from '../ui/MarkdownRenderer';
import { contentLoader } from '../../utils/ContentLoader';
import { CONTENT_PATHS } from '../../config/PopupStyles';

/**
 * Disclaimer popup that dynamically loads markdown content
 * 
 * This component handles the lifecycle of loading disclaimer content
 * from an external markdown file. It provides a fallback message if
 * the file cannot be loaded and manages loading states appropriately.
 * 
 * Features:
 * - Async content loading from markdown files
 * - Fallback content if file unavailable
 * - Loading state management
 * - Warning-styled popup (yellow theme)
 * - Acknowledgment button
 * 
 * @component
 * @param {Object} props - Component props
 * @param {boolean} props.isVisible - Controls popup visibility
 * @param {function} props.onClose - Callback when user closes/acknowledges popup
 * 
 * @returns {React.ReactElement|null} Disclaimer popup or null if loading/hidden
 * 
 * @example
 * // Simple usage
 * <DisclaimerPopup 
 *   isVisible={true} 
 *   onClose={() => console.log('Disclaimer closed')} 
 * />
 */
export const DisclaimerPopup = ({ isVisible, onClose }) => {
  // State to store loaded markdown content
  const [content, setContent] = useState('');

  // Loading state to prevent premature rendering
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Load disclaimer content when popup becomes visible
   * Uses ContentLoader singleton for caching and efficiency
   */
  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);
      const markdown = await contentLoader.load(CONTENT_PATHS.disclaimer);
      setContent(markdown || getFallbackContent());
      setIsLoading(false);
    };

    if (isVisible) {
      loadContent();
    }
  }, [isVisible]);

  /**
   * Provides fallback disclaimer content when markdown file unavailable
   * 
   * This ensures users always see important disclaimer information
   * even if the content file fails to load (network issues, missing file, etc.)
   * 
   * @returns {string} Fallback markdown content
   * @private
   */
  const getFallbackContent = () => ``.trim();

  // Don't render anything while loading content
  if (isLoading) {
    return null;
  }

  return (
    <InfoPopup
      type="warning"
      title="Disclaimer"
      icon="⚠️"
      buttonText="I Understand - View Anyway"
      content={<MarkdownRenderer markdown={content} />}
      isVisible={isVisible}
      onClose={onClose}
    />
  );
};

/**
 * Content Structure:
 * 
 * The disclaimer.md file should follow this structure:
 * 
 * ```markdown
 * ## Title
 * 
 * Introduction paragraph explaining the state of the project.
 * 
 * ### Feature Status:
 * 
 * - Feature 1: ✓ Status
 * - Feature 2: ✗ Status
 * - Feature 3: ⚠️ Status
 * 
 * ### Additional Information:
 * 
 * More details about usage, limitations, or warnings.
 * ```
 * 
 * Symbols:
 * - ✓ (checkmark) - Feature is working
 * - ✗ (cross) - Feature is not implemented
 * - ⚠️ (warning) - Feature is partially working or experimental
 */