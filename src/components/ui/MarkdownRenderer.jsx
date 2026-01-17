/**
 * @file MarkdownRenderer.jsx
 * @description Component that renders parsed markdown content with consistent styling.
 * Works in conjunction with MarkdownParser to display structured markdown elements.
 * 
 * @module components/ui/MarkdownRenderer
 * @requires react
 * @requires ../../utils/MarkdownParser
 * 
 * Supported Markdown Features:
 * - Headings (H1, H2, H3)
 * - Unordered lists with bullet points
 * - Paragraphs with automatic spacing
 * 
 * @example
 * // Basic usage
 * const markdown = `
 * ## Welcome
 * 
 * This is a paragraph.
 * 
 * ### Features:
 * - Feature one
 * - Feature two
 * `;
 * 
 * <MarkdownRenderer markdown={markdown} />
 * 
 * @example
 * // With dynamic content
 * const [content, setContent] = useState('');
 * 
 * useEffect(() => {
 *   fetch('/content/readme.md')
 *     .then(res => res.text())
 *     .then(setContent);
 * }, []);
 * 
 * <MarkdownRenderer markdown={content} />
 */

import React from 'react';
import { MarkdownParser } from '../../utils/MarkdownParser';

/**
 * Renders markdown content as styled HTML elements
 * 
 * The component parses markdown syntax and renders it as properly
 * styled React elements with consistent theming. All styling uses
 * Tailwind CSS classes for maintainability.
 * 
 * Features:
 * - Automatic parsing of markdown syntax
 * - Consistent typography and spacing
 * - Theme-aware color scheme
 * - Semantic HTML output
 * - Proper heading hierarchy
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.markdown - Raw markdown content to render
 * 
 * @returns {React.ReactElement|null} Rendered markdown or null if no content
 * 
 * @example
 * // Rendering a simple markdown document
 * const MyComponent = () => {
 *   const content = `
 *   # Main Title
 *   
 *   This is an introduction paragraph.
 *   
 *   ## Subsection
 *   
 *   ### Key Points:
 *   - First point
 *   - Second point
 *   - Third point
 *   
 *   Another paragraph with more details.
 *   `;
 *   
 *   return <MarkdownRenderer markdown={content} />;
 * };
 */
export const MarkdownRenderer = ({ markdown }) => {
  // Parse the markdown content into structured elements
  const elements = MarkdownParser(markdown);

  // Return null if no valid content was parsed
  if (!elements) return null;

  return (
    <div className="space-y-4">
      {elements.map((element, index) => {
        switch (element.type) {
          case 'heading':
            const HeadingTag = `h${element.level}`;
            const headingClasses = {
              1: 'text-xl font-bold text-white',
              2: 'text-lg font-semibold text-white',
              3: 'text-base font-semibold text-white/90'
            };
            return React.createElement(
              HeadingTag,
              { key: index, className: headingClasses[element.level] },
              element.text
            );
          
          case 'list':
            return (
              <ul key={index} className="text-white/70 text-sm space-y-1 pl-4">
                {element.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            );
          
          case 'paragraph':
            return (
              <p key={index} className="text-white/80 text-sm leading-relaxed">
                {element.text}
              </p>
            );
          
          default:
            return null;
        }
      })}
    </div>
  );
};