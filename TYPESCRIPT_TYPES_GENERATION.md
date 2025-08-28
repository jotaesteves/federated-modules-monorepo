# TypeScript Declaration Files Generation for Module Federation

## Overview

This project uses `dts-loader` with webpack to automatically generate TypeScript declaration files (`.d.ts`) for all Module Federation shared components and microfrontends. This provides type safety when creating new shared components or when developing new microfrontends.

## How it Works

### 1. DTS-Loader Integration

Each package that exposes Module Federation components uses `dts-loader` in their webpack configuration:

```typescript
// webpack.common.ts
import { getDtsModuleConfig } from '@config/webpack-config/module-federation';

const getCommonConfig = (): webpack.Configuration => ({
  module: {
    rules: [getDtsModuleConfig(Apps.appName)],
  },
  // ... other config
});
```

The `getDtsModuleConfig` function configures the dts-loader with:

- Application name
- Exposed modules
- Output directory (`.wp_federation`)

### 2. Generated Type Structure

When you build a package, types are generated in the `.wp_federation` directory:

```
packages/shared/.wp_federation/
└── shared/
    ├── components.d.ts
    ├── dts/
    │   └── src/
    │       ├── components/
    │       ├── hooks/
    │       ├── lib/
    │       └── ...
    ├── hooks/
    ├── lib/
    └── ...
```

### 3. TypeScript Path Mapping

The main application's `tsconfig.json` includes path mappings to these generated types:

```json
{
  "compilerOptions": {
    "paths": {
      "shared/*": [
        "../../packages/shared/.wp_federation/shared/*",
        "../../packages/shared/types/src/*"
      ],
      "header/*": ["../../apps/header/.wp_federation/header/*"],
      "footer/*": ["../../apps/footer/.wp_federation/footer/*"]
    }
  }
}
```

## Available Scripts

### Root Level Commands

```bash
# Generate types for all packages
bun run types:generate

# Generate types for all packages (rebuild)
bun run types:build
```

### Package Level Commands

Each package includes these scripts:

```bash
# Generate types for this package only
bun run types:generate

# Clean and regenerate types
bun run types:build

# Clean generated types
bun run types:clean
```

## Workflow

### For Existing Packages

1. **Development**: Types are automatically generated during the build process
2. **Manual Generation**: Run `bun run types:generate` from root or package directory
3. **Import in Code**: Use the generated types with full intellisense support

```typescript
// In a microfrontend
import { Button, Card } from 'shared/components';
import type { IconProps } from 'shared/components';

// Fully typed components with intellisense
const MyComponent = () => (
  <Card>
    <Button>Click me</Button>
  </Card>
);
```

### For New Shared Components

1. **Create Component**: Add your component to `packages/shared/src/components/`
2. **Export**: Add export to `packages/shared/src/components/index.ts`
3. **Generate Types**: Run `bun run types:generate` from the shared package or root
4. **Use**: Import with full type safety in any microfrontend

### For New Microfrontends

1. **Setup**: The setup script automatically adds type generation scripts
2. **Configure Webpack**: Ensure `getDtsModuleConfig` is included in webpack.common.ts
3. **Build**: Types are generated automatically during build
4. **Reference**: Add path mapping in consuming applications

## Benefits

### 🎯 **Type Safety**

- Full TypeScript support for all shared components
- Compile-time error detection
- IntelliSense autocomplete

### 🚀 **Developer Experience**

- Automatic type generation
- No manual type definitions needed
- Consistent typing across the monorepo

### 🔄 **Automatic Updates**

- Types update automatically when components change
- No need to manually sync type definitions
- Build-time generation ensures consistency

### 🛠 **Module Federation Integration**

- Works seamlessly with webpack Module Federation
- Supports dynamic imports and remote modules
- Handles shared dependencies correctly

## Configuration Details

### Webpack Configuration

The `getDtsModuleConfig` function returns:

```typescript
{
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: [{
    loader: 'dts-loader',
    options: {
      name: 'appName',
      exposes: { /* exposed modules */ },
      typesOutputDir: '.wp_federation',
    },
  }],
}
```

### Turbo Configuration

Types generation is integrated into the build pipeline:

```json
{
  "tasks": {
    "build": {
      "outputs": ["dist/**", "build/**", "types/**", ".wp_federation/**"]
    },
    "types:generate": {
      "outputs": ["types/**", ".wp_federation/**"]
    }
  }
}
```

## Troubleshooting

### Common Issues

1. **Types not updating**: Run `bun run types:clean && bun run types:generate`
2. **Import errors**: Check path mappings in tsconfig.json
3. **Build failures**: Ensure webpack configuration includes dts-loader

### Cache Issues

If you encounter caching issues:

```bash
# Clear all caches and regenerate
bun run types:clean
rm -rf .turbo
bun run types:generate
```

### Manual Type Updates

For shared components, the centralized declaration file is at:
`packages/@config/webpack-config/shared-components.d.ts`

This file can be manually updated if needed, but automatic generation is preferred.

## Best Practices

### 1. Component Development

- Always export new components from the index file
- Use consistent prop interfaces
- Document complex component APIs

### 2. Type Generation

- Run type generation after significant changes
- Include in CI/CD pipeline
- Commit generated types to version control

### 3. Import Patterns

```typescript
// ✅ Good - Use path mapping
import { Button } from 'shared/components';

// ❌ Avoid - Direct file imports
import Button from '../../packages/shared/src/components/Button';
```

### 4. Testing

- Test type generation in CI
- Verify imports work across packages
- Check for type conflicts

## Future Enhancements

1. **Watch Mode**: Automatic type regeneration during development
2. **Validation**: Type checking across module boundaries
3. **Documentation**: Auto-generate component documentation from types
4. **Performance**: Incremental type generation

---

For more information, see:

- [Module Federation Configuration](./packages/@config/webpack-config/)
- [Shared Components](./packages/shared/)
- [Adding New Microfrontends](./ADDING_NEW_MICROFRONTEND.md)
