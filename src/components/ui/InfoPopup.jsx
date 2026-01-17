/**
 * @file InfoPopup.jsx
 * @description Generic popup component for displaying various types of information
 * with customizable styling based on message type (warning, info, success, error).
 * 
 * @module components/ui/InfoPopup
 * @requires react
 * @requires ../../config/popupStyles
 * 
 * @example
 * // Basic usage with info type
 * <InfoPopup
 *   type="info"
 *   title="Welcome"
 *   content={<p>Welcome to the app!</p>}
 *   icon="👋"
 *   isVisible={true}
 *   onClose={() => setVisible(false)}
 * />
 * 
 * @example
 * // Warning popup with custom button text
 * <InfoPopup
 *   type="warning"
 *   title="Caution"
 *   content="This action cannot be undone."
 *   icon="⚠️"
 *   buttonText="I Understand"
 *   isVisible={showWarning}
 *   onClose={handleClose}
 * />
 */

import { POPUP_STYLES } from '../../config/PopupStyles';

/**
 * Generic popup component that displays information with type-based styling
 * 
 * Features:
 * - Multiple visual themes (warning, info, success, error)
 * - Customizable icon and button text
 * - Flexible content (text, JSX, or React components)
 * - Backdrop blur effect
 * - Responsive design
 * - Accessible with proper focus management
 * 
 * @component
 * @param {Object} props - Component props
 * @param {('warning'|'info'|'success'|'error')} [props.type='info'] - Visual theme type
 * @param {string} props.title - Popup title text
 * @param {React.ReactNode} props.content - Main content (can be text, JSX, or components)
 * @param {string} [props.icon] - Optional emoji or icon to display
 * @param {string} [props.buttonText='Got it'] - Text for the close button
 * @param {function} props.onClose - Callback function when popup is closed
 * @param {boolean} [props.isVisible=true] - Controls popup visibility
 * 
 * @returns {React.ReactElement|null} Popup component or null if not visible
 * 
 * @example
 * const MyComponent = () => {
 *   const [showPopup, setShowPopup] = useState(false);
 *   
 *   return (
 *     <InfoPopup
 *       type="success"
 *       title="Success!"
 *       content="Your changes have been saved."
 *       icon="✅"
 *       buttonText="Awesome!"
 *       isVisible={showPopup}
 *       onClose={() => setShowPopup(false)}
 *     />
 *   );
 * };
 */
export const InfoPopup = ({ 
  type = 'info', 
  title, 
  content, 
  icon, 
  buttonText = 'Got it',
  onClose, 
  isVisible = true 
}) => {

  // Don't render if not visible
  if (!isVisible) return null;

  // Get style configuration for the specified type, fallback to 'info' if type is invalid
  const style = POPUP_STYLES[type] || POPUP_STYLES.info;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className={`bg-gradient-to-br ${style.gradient} border ${style.border} rounded-2xl p-8 max-w-md mx-4 shadow-2xl`}>
        <div className="flex items-start gap-4 mb-6">
          {icon && <div className="text-4xl">{icon}</div>}
          <div className="flex-1">
            <h2 className={`text-2xl font-bold ${style.titleColor} mb-2`}>
              {title}
            </h2>
            <div className="text-white/80 text-sm leading-relaxed">
              {content}
            </div>
          </div>
        </div>
        
        <button
          onClick={onClose}
          className={`w-full ${style.buttonBg} ${style.buttonText} font-semibold py-3 px-6 rounded-lg border ${style.buttonBorder} transition-all`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};