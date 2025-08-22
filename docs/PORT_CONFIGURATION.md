# Port Configuration System

This document explains the auto-incrementing port configuration system with environment variable fallbacks.

## Overview

The port configuration system automatically assigns ports to each micro-frontend application, eliminating the need for manual port management while providing flexibility through environment variables.

## How It Works

### 1. Auto-Incrementing Ports

Ports are automatically assigned starting from configurable base ports:

- **Development ports**: Start at `3000` (configurable via `DEV_BASE_PORT`)
- **Analyzer ports**: Start at `4000` (configurable via `ANALYZER_BASE_PORT`)

Each application gets sequential ports based on their position in the `Apps` enum.

### 2. Environment Variable Override

You can override any application's port using environment variables:

```bash
# Override specific app ports
export MAIN_DEV_PORT=3100
export MAIN_ANALYZER_PORT=4100
export HEADER_DEV_PORT=3200
export SHARED_ANALYZER_PORT=4200

# Change base ports for all apps
export DEV_BASE_PORT=5000
export ANALYZER_BASE_PORT=6000
```

### 3. Environment Variable Naming Convention

The environment variables follow this pattern:

- `{APP_NAME}_{PORT_TYPE}_PORT`
- Where `APP_NAME` is the uppercase app name from the `Apps` enum
- And `PORT_TYPE` is either `DEV` or `ANALYZER`

Examples:

- `MAIN_DEV_PORT` - Development port for main app
- `SHARED_ANALYZER_PORT` - Analyzer port for shared components
- `HEADER_DEV_PORT` - Development port for header micro-frontend

## Current Port Assignments

With default configuration (`DEV_BASE_PORT=3000`, `ANALYZER_BASE_PORT=4000`):

| Application         | Dev Port | Analyzer Port | Dev Port Env Var               | Analyzer Port Env Var               |
| ------------------- | -------- | ------------- | ------------------------------ | ----------------------------------- |
| main                | 3000     | 4000          | `MAIN_DEV_PORT`                | `MAIN_ANALYZER_PORT`                |
| shared              | 3001     | 4001          | `SHARED_DEV_PORT`              | `SHARED_ANALYZER_PORT`              |
| header              | 3002     | 4002          | `HEADER_DEV_PORT`              | `HEADER_ANALYZER_PORT`              |
| vision360           | 3003     | 4003          | `VISION360_DEV_PORT`           | `VISION360_ANALYZER_PORT`           |
| footer              | 3004     | 4004          | `FOOTER_DEV_PORT`              | `FOOTER_ANALYZER_PORT`              |
| personalData        | 3005     | 4005          | `PERSONALDATA_DEV_PORT`        | `PERSONALDATA_ANALYZER_PORT`        |
| assetsProducts      | 3006     | 4006          | `ASSETSPRODUCTS_DEV_PORT`      | `ASSETSPRODUCTS_ANALYZER_PORT`      |
| channelsAndServices | 3007     | 4007          | `CHANNELSANDSERVICES_DEV_PORT` | `CHANNELSANDSERVICES_ANALYZER_PORT` |

## Benefits

### ✅ Automatic Port Management

- No manual port assignment needed when adding new applications
- Eliminates port conflicts between applications
- Consistent port allocation strategy

### ✅ Environment Flexibility

- Override any port via environment variables
- Different configurations for different environments (dev, staging, prod)
- Team members can use custom ports to avoid conflicts

### ✅ Scalability

- Easy to add new applications without worrying about port conflicts
- Base ports can be adjusted for different environments
- Supports unlimited number of applications

### ✅ Maintainability

- Single source of truth for port configuration
- Clear documentation and naming conventions
- Easy to debug with the `logPortConfiguration()` utility

## Usage Examples

### Adding a New Micro-Frontend

1. Add the new app to the `Apps` enum in `enums.ts`:

```typescript
export enum Apps {
  main,
  shared,
  header,
  // ... existing apps
  newMicroFrontend, // Automatically gets ports 3008/4008
}
```

2. The port will be automatically assigned - no manual configuration needed!

### Custom Port Configuration for Development

Create a `.env` file in your project root:

```bash
# Use different port ranges to avoid conflicts with other projects
DEV_BASE_PORT=5000
ANALYZER_BASE_PORT=6000

# Override specific apps if needed
MAIN_DEV_PORT=8080
SHARED_DEV_PORT=8081
```

### Debugging Port Configuration

Use the built-in utility to see current port assignments:

```typescript
import { logPortConfiguration, getPortMappings } from './module-federation';

// Log all current port assignments
logPortConfiguration();

// Get port mappings programmatically
const ports = getPortMappings();
console.log('Main app dev port:', ports.main.devPort);
```

## Migration from Old System

The old hardcoded `mapPorts` object has been replaced with the dynamic system. If you were previously relying on specific port numbers, you can:

1. Set environment variables to maintain the same ports
2. Update any external references to use the new port assignments
3. Use the `getPortMappings()` function to access ports programmatically

## Future Enhancements

Potential improvements to consider:

- Port availability checking
- Docker container port mapping integration
- IDE integration for port configuration
- Automatic proxy configuration generation
