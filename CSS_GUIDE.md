# CSS Support Guide

This project supports multiple CSS approaches to give you flexibility in styling your applications. Here's how to use each approach:

## 🎨 Available CSS Approaches

### 1. **Tailwind CSS** (Recommended for most use cases)

Tailwind CSS is pre-configured and ready to use across all apps and the shared package.

**Usage:**

```tsx
// Use Tailwind classes directly in JSX
function Button() {
  return (
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
      Click me
    </button>
  );
}
```

**Pre-built components in shared package:**

```tsx
// Available utility classes
<button className="btn-primary">Primary Button</button>
<button className="btn-secondary">Secondary Button</button>
<div className="card">Card content</div>
```

### 2. **CSS Modules** (For component-scoped styles)

For styles that should be scoped to specific components.

**Usage:**

```css
/* Button.module.css */
.button {
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border: 0;
  border-radius: 3px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  color: white;
  height: 48px;
  padding: 0 30px;
}

.button:hover {
  transform: scale(1.05);
}
```

```tsx
// Button.tsx
import styles from './Button.module.css';

function Button() {
  return <button className={styles.button}>Styled Button</button>;
}
```

### 3. **Regular CSS Files** (For global styles)

For global styles or when you don't need scoping.

**Usage:**

```css
/* styles.css */
.my-global-class {
  font-size: 1.2rem;
  color: #333;
}

.another-class {
  margin: 10px;
  padding: 15px;
}
```

```tsx
// Component.tsx
import './styles.css';

function Component() {
  return <div className="my-global-class">Content</div>;
}
```

### 4. **Emotion.js CSS-in-JS** (Already configured)

For dynamic styles and theme integration.

**Usage:**

```tsx
import { css } from '@emotion/react';

const buttonStyle = css`
  background: #ff6b6b;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;

  &:hover {
    background: #ff5252;
  }
`;

function Button() {
  return <button css={buttonStyle}>Emotion Button</button>;
}
```

## 🛠️ Configuration Details

### Webpack Configuration

The project is configured to handle:

- **CSS Modules**: Files ending with `.module.css` are automatically processed as CSS modules
- **Regular CSS**: All other `.css` files are processed as global CSS
- **PostCSS**: Includes Tailwind CSS and Autoprefixer
- **Style Injection**: CSS is injected into the DOM for development

### TypeScript Support

TypeScript declarations are configured for:

```typescript
// Regular CSS imports (returns class name object for CSS modules)
import styles from './component.module.css';

// String imports (for programmatic access)
import cssContent from './styles.css?raw';
```

### File Structure Recommendations

```
src/
├── styles/
│   ├── tailwind.css          # Main Tailwind file
│   ├── global.css           # Global styles
│   └── variables.css        # CSS custom properties
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.module.css # Component-scoped styles
│   │   └── index.ts
│   └── Card/
│       ├── Card.tsx
│       └── Card.module.css
```

## 🎯 Best Practices

### 1. **Use Tailwind for Most Styling**

```tsx
// ✅ Good - Use Tailwind utilities
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
  <h2 className="text-xl font-semibold text-gray-800">Title</h2>
  <button className="btn-primary">Action</button>
</div>
```

### 2. **Use CSS Modules for Complex Components**

```tsx
// ✅ Good - Complex component with custom styles
import styles from './DataVisualization.module.css';

function DataVisualization() {
  return (
    <div className={`${styles.container} bg-white rounded-lg shadow-md`}>
      <div className={styles.chartArea}>{/* Complex chart styles in CSS module */}</div>
    </div>
  );
}
```

### 3. **Combine Approaches When Needed**

```tsx
// ✅ Good - Combining Tailwind with CSS modules
import styles from './Component.module.css';

function Component() {
  return (
    <div className={`${styles.customAnimation} p-4 bg-blue-50`}>
      {/* Tailwind for layout, CSS module for animations */}
    </div>
  );
}
```

### 4. **Use Emotion for Dynamic Styles**

```tsx
// ✅ Good - Dynamic styles based on props
import { css } from '@emotion/react';

function StatusBadge({ status }: { status: 'success' | 'error' | 'warning' }) {
  const badgeStyle = css`
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 500;
    background: ${status === 'success' ? '#10b981' : status === 'error' ? '#ef4444' : '#f59e0b'};
    color: white;
  `;

  return <span css={badgeStyle}>{status}</span>;
}
```

## 🔧 Development Workflow

### Building Tailwind CSS

The Tailwind CSS is automatically built during development and production builds. You can also build it manually:

```bash
# Build Tailwind CSS for production
pnpm --filter shared build:css

# Watch Tailwind CSS during development
pnpm --filter shared dev:css
```

### Adding New CSS Dependencies

Add CSS-related packages to the shared package:

```bash
# Example: Adding a CSS framework
cd packages/shared
pnpm add some-css-framework

# Or add dev dependencies
pnpm add -D some-css-tool
```

### Shared Styles Across Apps

Place shared styles in the `packages/shared/src/styles/` directory:

```tsx
// In any app
import 'shared/styles/tailwind.css'; // Already imported in bootstrap files
import 'shared/styles/custom.css'; // Add custom shared styles
```

## 🚀 Performance Tips

1. **Use Tailwind's purge configuration** - Already configured to scan all relevant files
2. **Minimize CSS-in-JS for static styles** - Use Tailwind or CSS modules instead
3. **Group related CSS modules** - Keep component styles close to components
4. **Use CSS custom properties** - For theme values that change dynamically

## 🤝 Integration with Module Federation

CSS styles are properly shared across federated modules:

- **Tailwind CSS** is loaded once in the main app and shared across all modules
- **Component-specific styles** are bundled with their respective modules
- **Global styles** from the shared package are available everywhere

## 📚 Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [CSS Modules Documentation](https://github.com/css-modules/css-modules)
- [Emotion Documentation](https://emotion.sh/docs/introduction)
- [PostCSS Documentation](https://postcss.org/)
