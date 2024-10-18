# learning-github-actions

This repository is a collection of GitHub Actions and workflows to demonstrate various features and capabilities of GitHub Actions. It includes examples of composite actions, Docker-based actions, and JavaScript-based actions.

## Overview

The purpose of this repository is to provide a comprehensive guide to learning and using GitHub Actions. It contains several custom actions and workflows that showcase different use cases and functionalities.

## Workflows

### 1. Build and deploy ASP.Net Core app to an Azure Web App
- **File**: `.github/workflows/azure-webapps-dotnet-core.yml`
- **Description**: This workflow builds and pushes a .NET Core app to an Azure Web App when a commit is pushed to your default branch.

### 2. Call Reusable Workflow
- **File**: `.github/workflows/caller-greeting.yml`
- **Description**: This workflow calls a reusable workflow to greet a specified user.

### 3. Close inactive issues
- **File**: `.github/workflows/close-inactive-issues.yml`
- **Description**: This workflow closes inactive issues after a specified period of inactivity.

### 4. Greeting Composite Workflow
- **File**: `.github/workflows/composite-action.yml`
- **Description**: This workflow uses a composite action to greet a specified user.

### 5. Conditional env variable
- **File**: `.github/workflows/conditional-env.yml`
- **Description**: This workflow demonstrates the use of conditional environment variables.

### 6. Using environments to manually trigger workflow jobs
- **File**: `.github/workflows/dev-env.yml`
- **Description**: This workflow demonstrates the use of environments to manually trigger workflow jobs.

### 7. Greeting Docker Workflow
- **File**: `.github/workflows/docker-action.yml`
- **Description**: This workflow uses a Docker-based action to greet a specified user.

### 8. Environment Variables
- **File**: `.github/workflows/env-variables.yml`
- **Description**: This workflow demonstrates the use of environment variables.

### 9. Viewing all properties of an event
- **File**: `.github/workflows/event-properities.yml`
- **Description**: This workflow prints all properties of an event to the console.

### 10. Add comment on an issue when "help wanted" label is added
- **File**: `.github/workflows/issue-comment.yml`
- **Description**: This workflow adds a comment to an issue when the "help wanted" label is added.

### 11. Greeting JavaScript Action
- **File**: `.github/workflows/javascript-action.yml`
- **Description**: This workflow uses a JavaScript-based action to greet a specified user.

### 12. Job Dependency
- **File**: `.github/workflows/job-dependency.yml`
- **Description**: This workflow demonstrates job dependencies.

### 13. Label issues
- **File**: `.github/workflows/label-issues.yml`
- **Description**: This workflow labels issues when they are opened or reopened.

### 14. Defining inputs for manually triggered workflow
- **File**: `.github/workflows/manual-inputs.yml`
- **Description**: This workflow defines inputs for manually triggered workflows.

### 15. Matrix Workflow Example
- **File**: `.github/workflows/matrix.yml`
- **Description**: This workflow demonstrates the use of a matrix strategy to run jobs on multiple operating systems and Node.js versions.

### 16. Reusable workflow example
- **File**: `.github/workflows/reusable-greeting.yml`
- **Description**: This workflow demonstrates the use of a reusable workflow to greet a specified user.

### 17. Run Bash Script
- **File**: `.github/workflows/run-bash-script.yml`
- **Description**: This workflow runs a Bash script.

### 18. Run PowerShell Script
- **File**: `.github/workflows/run-powershell.yml`
- **Description**: This workflow runs a PowerShell script.

### 19. Weekly Team Sync
- **File**: `.github/workflows/schedule-issue-creation.yml`
- **Description**: This workflow creates a weekly team sync issue.

### 20. Run using Self Hosted Runner
- **File**: `.github/workflows/self-hosted-runner.yml`
- **Description**: This workflow runs a job using a self-hosted runner.

### 21. Share data between jobs
- **File**: `.github/workflows/upload-download-artifact.yml`
- **Description**: This workflow demonstrates how to share data between jobs using artifacts.
