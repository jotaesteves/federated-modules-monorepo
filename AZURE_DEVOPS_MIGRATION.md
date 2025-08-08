# GitLab CI to Azure DevOps Migration Guide

This document outlines the migration from GitLab CI to Azure DevOps for the federated modules monorepo.

## Key Differences Between GitLab CI and Azure DevOps

### 1. File Structure

- **GitLab CI**: Uses `.gitlab-ci.yml`
- **Azure DevOps**: Uses `azure-pipelines.yml`

### 2. Syntax Differences

#### Triggers

```yaml
# GitLab CI (implicit)
# Triggers on all pushes to any branch

# Azure DevOps (explicit)
trigger:
  branches:
    include:
      - main
      - develop
      - feature/*
```

#### Stages vs Jobs

```yaml
# GitLab CI
stages:
  - lint
  - build

# Azure DevOps
stages:
- stage: Lint
  jobs:
  - job: LintJob
```

#### Variables

```yaml
# GitLab CI
variables:
  BUCKET_NAME: 'federated-web-app-bucket'

# Azure DevOps (same syntax)
variables:
  BUCKET_NAME: 'federated-web-app-bucket'
```

#### Script Execution

```yaml
# GitLab CI
script:
  - pnpm install
  - pnpm lint

# Azure DevOps
- script: |
    pnpm install
    pnpm lint
  displayName: 'Install dependencies and run lint'
```

### 3. Caching

```yaml
# GitLab CI
cache:
  key:
    files:
      - pnpm-lock.yaml
  paths:
    - .pnpm-store

# Azure DevOps
- task: Cache@2
  inputs:
    key: 'pnpm | "$(Agent.OS)" | pnpm-lock.yaml'
    path: $(PNPM_CACHE_FOLDER)
```

### 4. Artifacts

```yaml
# GitLab CI
artifacts:
  paths:
    - apps/*/dist
    - packages/*/dist

# Azure DevOps
- task: PublishPipelineArtifact@1
  inputs:
    targetPath: '$(System.DefaultWorkingDirectory)'
    artifact: 'build-output'
```

### 5. Deployment Jobs

```yaml
# GitLab CI
.deploy:
  extends: .deploy
  variables:
    SOURCE: apps/main

# Azure DevOps
- deployment: DeployMain
  environment: 'production'
  strategy:
    runOnce:
      deploy:
        steps:
        # deployment steps
```

## Migration Steps

### 1. Set up Azure DevOps Pipeline Variables

Configure the following variables in Azure DevOps Library or Pipeline Variables:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_DEFAULT_REGION`
- `BUCKET_NAME`

### 2. Create Environment

Create a "production" environment in Azure DevOps for deployment approvals and tracking.

### 3. AWS CLI Setup

The pipeline now installs AWS CLI using curl instead of using a pre-built image. This provides more control but requires internet access during pipeline execution.

### 4. Manual Deployment Trigger

Unlike GitLab CI which uses manual rules, Azure DevOps uses:

- Condition-based deployment (only on main branch)
- Environment-based approvals for production deployments

## Key Improvements in Azure DevOps Version

### 1. Better Artifact Management

- Single build artifact containing entire workspace
- More efficient artifact download/upload

### 2. Simplified Deployment

- Combined deployment job instead of separate jobs for each app
- Single CloudFront invalidation for all deployments

### 3. Enhanced Caching

- OS-specific cache keys
- Better cache hit rates with Azure's caching mechanism

### 4. Improved Error Handling

- Better conditional execution
- More granular step control

### 5. Test Results Integration

- Built-in test result publishing
- Integration with Azure DevOps test reporting

## Configuration Requirements

### Azure DevOps Project Setup

1. Create new Azure DevOps project
2. Import repository or connect to existing Git repository
3. Create new pipeline using `azure-pipelines.yml`

### Service Connections

Create AWS service connection for deployment:

1. Go to Project Settings > Service Connections
2. Create new AWS service connection
3. Configure with AWS credentials

### Variable Groups

Create variable group with:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_DEFAULT_REGION`
- `BUCKET_NAME`

### Environments

Create "production" environment for deployment approvals and gates.

## Migration Checklist

- [ ] Create Azure DevOps project
- [ ] Set up repository connection
- [ ] Configure pipeline variables
- [ ] Create service connections for AWS
- [ ] Set up production environment
- [ ] Test pipeline with feature branch
- [ ] Validate deployment to staging/test environment
- [ ] Configure branch policies for main branch
- [ ] Set up deployment approvals
- [ ] Migrate existing GitLab CI variables to Azure DevOps
- [ ] Update documentation and team processes
- [ ] Archive/disable GitLab CI pipeline

## Notes

1. **Parallel Execution**: Azure DevOps may have different parallel job limits compared to GitLab CI
2. **Agent Pools**: Consider using self-hosted agents for faster execution or specific requirements
3. **Monitoring**: Set up Azure DevOps dashboards and alerts for pipeline monitoring
4. **Integration**: Consider integrating with Azure Boards for work item tracking
