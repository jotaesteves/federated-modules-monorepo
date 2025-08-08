import * as React from 'react';
import { css } from '@emotion/react';
import styles from './CSSShowcase.module.css';

interface CSSShowcaseProps {
  title?: string;
}

/**
 * Comprehensive component demonstrating all CSS approaches:
 * 1. Tailwind CSS (utility classes)
 * 2. CSS Modules (scoped styles)
 * 3. Emotion CSS-in-JS (dynamic styles)
 * 4. Regular CSS classes (global styles)
 */
const CSSShowcase: React.FC<CSSShowcaseProps> = ({ title = 'CSS Approaches Demo' }) => {
  const [activeDemo, setActiveDemo] = React.useState<string>('tailwind');

  // Emotion CSS-in-JS dynamic styles
  const emotionCardStyle = css`
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 12px;
    padding: 24px;
    color: white;
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 40px rgba(102, 126, 234, 0.4);
    }
  `;

  const demos = [
    { id: 'tailwind', label: 'Tailwind CSS', color: 'blue' },
    { id: 'modules', label: 'CSS Modules', color: 'green' },
    { id: 'emotion', label: 'Emotion CSS', color: 'purple' },
    { id: 'global', label: 'Global CSS', color: 'red' },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Page Header with Tailwind */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          This component demonstrates all CSS approaches available in the project. Each section
          showcases a different styling method.
        </p>
      </div>

      {/* Demo Navigation with Tailwind */}
      <div className="flex justify-center space-x-4 mb-8">
        {demos.map((demo) => (
          <button
            key={demo.id}
            onClick={() => setActiveDemo(demo.id)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeDemo === demo.id
                ? `bg-${demo.color}-600 text-white shadow-lg transform scale-105`
                : `bg-${demo.color}-100 text-${demo.color}-700 hover:bg-${demo.color}-200`
            }`}
          >
            {demo.label}
          </button>
        ))}
      </div>

      {/* Demo Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Tailwind CSS Demo */}
        <div
          className={`transition-all duration-300 ${
            activeDemo === 'tailwind' ? 'ring-4 ring-blue-400' : ''
          }`}
        >
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tailwind CSS</h3>
            <p className="text-gray-600 text-sm mb-4">
              Utility-first CSS framework. Great for rapid development and consistent design.
            </p>
            <div className="space-y-2">
              <button className="btn-primary w-full">Primary Button</button>
              <button className="btn-secondary w-full">Secondary Button</button>
            </div>
          </div>
        </div>

        {/* CSS Modules Demo */}
        <div
          className={`transition-all duration-300 ${
            activeDemo === 'modules' ? 'ring-4 ring-green-400' : ''
          }`}
        >
          <div className={styles.moduleCard}>
            <div className={styles.moduleIcon}>
              <span className={styles.iconText}>CSS</span>
            </div>
            <h3 className={styles.moduleTitle}>CSS Modules</h3>
            <p className={styles.moduleDescription}>
              Scoped CSS that won't conflict with other styles. Perfect for component-specific
              styling.
            </p>
            <div className={styles.moduleActions}>
              <button className={styles.moduleButton}>Module Button</button>
              <button className={`${styles.moduleButton} ${styles.moduleButtonSecondary}`}>
                Secondary
              </button>
            </div>
          </div>
        </div>

        {/* Emotion CSS-in-JS Demo */}
        <div
          className={`transition-all duration-300 ${
            activeDemo === 'emotion' ? 'ring-4 ring-purple-400' : ''
          }`}
        >
          <div css={emotionCardStyle}>
            <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-lg mb-4">
              <span className="text-white font-bold text-lg">💜</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Emotion CSS</h3>
            <p className="text-sm opacity-90 mb-4">
              CSS-in-JS with dynamic styling capabilities. Great for theme-based and interactive
              styles.
            </p>
            <button
              css={css`
                background: rgba(255, 255, 255, 0.2);
                border: 1px solid rgba(255, 255, 255, 0.3);
                color: white;
                padding: 8px 16px;
                border-radius: 6px;
                cursor: pointer;
                transition: all 0.2s ease;

                &:hover {
                  background: rgba(255, 255, 255, 0.3);
                  transform: scale(1.05);
                }
              `}
            >
              Dynamic Button
            </button>
          </div>
        </div>

        {/* Global CSS Demo */}
        <div
          className={`transition-all duration-300 ${
            activeDemo === 'global' ? 'ring-4 ring-red-400' : ''
          }`}
        >
          <div className="global-demo-card">
            <div className="global-icon-wrapper">
              <span className="global-icon">🌍</span>
            </div>
            <h3 className="global-title">Global CSS</h3>
            <p className="global-description">
              Traditional CSS classes that are available globally. Useful for utility classes and
              base styles.
            </p>
            <button className="global-button">Global Button</button>
          </div>
        </div>
      </div>

      {/* Feature Comparison */}
      <div className="bg-gray-50 rounded-xl p-8 mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          When to Use Each Approach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="font-semibold text-blue-900 mb-2">Tailwind CSS</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Rapid prototyping</li>
              <li>• Consistent spacing</li>
              <li>• Responsive design</li>
              <li>• Utility classes</li>
            </ul>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h4 className="font-semibold text-green-900 mb-2">CSS Modules</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Component isolation</li>
              <li>• No naming conflicts</li>
              <li>• Complex components</li>
              <li>• Reusable styles</li>
            </ul>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h4 className="font-semibold text-purple-900 mb-2">Emotion CSS</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Dynamic styling</li>
              <li>• Theme integration</li>
              <li>• Props-based styles</li>
              <li>• Runtime flexibility</li>
            </ul>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌐</span>
            </div>
            <h4 className="font-semibold text-red-900 mb-2">Global CSS</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Base styles</li>
              <li>• CSS reset/normalize</li>
              <li>• Legacy integration</li>
              <li>• Simple utilities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSSShowcase;
