/**
 * @file DisclaimerPopup.jsx
 * @description Disclaimer popup component that displays static markdown content
 * to users. Shows work-in-progress notices and feature status.
 * 
 * @module components/popups/DisclaimerPopup
 * @requires react
 * @requires ../ui/InfoPopup
 * @requires ../ui/MarkdownRenderer
 * @requires ../../config/PopupStyles
 * 
 * Content Source:
 * - Loads from: CONTENT.disclaimer constant in PopupStyles config
 * - Content is statically defined in configuration
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
 * // With state persistence
 * const App = () => {
 *   const [showDisclaimer, setShowDisclaimer] = useState(() => {
 *     return !sessionStorage.getItem('disclaimerAcknowledged');
 *   });
 *   
 *   const handleClose = () => {
 *     sessionStorage.setItem('disclaimerAcknowledged', 'true');
 *     setShowDisclaimer(false);
 *   };
 *   
 *   return <DisclaimerPopup isVisible={showDisclaimer} onClose={handleClose} />;
 * };
 */

import { InfoPopup } from '../ui/InfoPopup';
import { MarkdownRenderer } from '../ui/MarkdownRenderer';
import { CONTENT } from '../../config/PopupStyles';

/**
 * Disclaimer popup that displays static markdown content
 * 
 * This component renders a warning-styled popup with disclaimer content
 * sourced from the application configuration. The content is immediately
 * available without any loading state.
 * 
 * Features:
 * - Static content from configuration
 * - Warning-styled popup (yellow theme)
 * - Acknowledgment button
 * - No loading states or async operations
 * 
 * @component
 * @param {Object} props - Component props
 * @param {boolean} props.isVisible - Controls popup visibility
 * @param {function} props.onClose - Callback when user closes/acknowledges popup
 * 
 * @returns {React.ReactElement} Disclaimer popup component
 * 
 * @example
 * // Simple usage
 * <DisclaimerPopup 
 *   isVisible={true} 
 *   onClose={() => console.log('Disclaimer closed')} 
 * />
 */
export const DisclaimerPopup = ({ isVisible, onClose }) => {
  const content = CONTENT.disclaimer;

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