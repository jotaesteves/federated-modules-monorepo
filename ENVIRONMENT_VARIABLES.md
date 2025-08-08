# Environment Variables

This document describes the environment variables used across the federated modules monorepo and how to configure them.

## Setup

1. Copy the appropriate `.env.example` files to `.env` files in each directory where they're needed
2. Update the values according to your environment

```bash
# Root level (shared variables)
cp .env.example .env

# Individual applications
cp apps/main/.env.example apps/main/.env
cp apps/app1/.env.example apps/app1/.env
cp apps/app2/.env.example apps/app2/.env

# Shared package
cp packages/shared/.env.example packages/shared/.env

# E2E testing
cp e2e/.env.example e2e/.env

# Infrastructure
cp infra/.env.example infra/.env
```

## Environment Variables by Scope

### Root Level Variables (`.env`)

These variables are shared across all applications:

- **`HOST_BASE_URL`** - Base URL for hosting federated modules in production
- **`API_BASE_URL`** - Base URL for API endpoints used across applications
- **`NODE_ENV`** - Environment mode (development, production, test)
- **`CI`** - Set to true when running in CI environment

### Application-Specific Variables

#### Main App (`apps/main/.env`)

- **`PORT`** - Development server port (default: 3000)

#### App1 (`apps/app1/.env`)

- **`PORT`** - Development server port (default: 3002)

#### App2 (`apps/app2/.env`)

- **`PORT`** - Development server port (default: 3003)

#### Shared Package (`packages/shared/.env`)

- **`PORT`** - Development server port (default: 3001)

### E2E Testing Variables (`e2e/.env`)

- **`BASE_URL`** - Base URL for testing (default: http://localhost:3000)
- **`API_BASE_URL`** - API URL for testing
- **`CI`** - CI environment flag

### Infrastructure Variables (`infra/.env`)

- **`AWS_ACCOUNT_ID`** - AWS account ID for CDK deployment
- **`AWS_DEFAULT_REGION`** - AWS region for resources
- **`BUCKET_NAME`** - S3 bucket name for hosting
- **`ENVIRONMENT`** - Deployment environment

## Usage in Code

### Module Federation

The `HOST_BASE_URL` variable is used in `packages/@config/webpack-config/module-federation.ts` to configure remote entry points for production deployments.

### API Calls

The `API_BASE_URL` variable is used in `packages/shared/src/utils/api/api.ts` for making API requests.

### Webpack Configuration

Environment variables are injected using `webpack.EnvironmentPlugin` in the webpack configurations.

## Development vs Production

### Development

In development, the applications run on localhost with different ports:

- Main: http://localhost:3000
- Shared: http://localhost:3001
- App1: http://localhost:3002
- App2: http://localhost:3003

### Production

In production, the `HOST_BASE_URL` should point to your actual domain where the federated modules are hosted.

## CI/CD

For CI/CD pipelines, ensure the following environment variables are configured:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_DEFAULT_REGION`
- `BUCKET_NAME`

## Security Notes

1. **Never commit `.env` files** - They are already included in `.gitignore`
2. **Use different values for different environments** - development, staging, production
3. **Store sensitive values securely** - Use your CI/CD platform's secret management for production values
4. **Rotate credentials regularly** - Especially for production environments

## Troubleshooting

### Module Federation Issues

If remote modules fail to load, check:

1. `HOST_BASE_URL` is correctly set
2. All applications are accessible at their configured URLs
3. CORS is properly configured for cross-origin requests

### API Issues

If API calls fail, verify:

1. `API_BASE_URL` is correct and accessible
2. API endpoints are available
3. CORS is configured on the API server
