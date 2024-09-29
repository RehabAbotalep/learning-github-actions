# learning-github-actions

This repository is a collection of GitHub Actions and workflows to demonstrate various features and capabilities of GitHub Actions. It includes examples of composite actions, Docker-based actions, and JavaScript-based actions.

## Overview

The purpose of this repository is to provide a comprehensive guide to learning and using GitHub Actions. It contains several custom actions and workflows that showcase different use cases and functionalities.

## How to Use the Actions

### Hello World Composite Action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

#### Inputs

- `who-to-greet`: **Required** The name of the person to greet. Default `"World"`.

#### Example usage

```
uses: ./.github/actions/hello-world-composite-action
with:
  who-to-greet: 'Rehab Ragab'
```

### Hello World Docker Action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log using Docker.

#### Inputs

- `who-to-greet`: **Required** The name of the person to greet. Default `"World"`.

#### Example usage

```
uses: ./.github/actions/hello-world-docker-action
with:
  who-to-greet: 'Rehab Ragab'
```

### Hello World JavaScript Action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log using JavaScript.

#### Inputs

- `who-to-greet`: **Required** The name of the person to greet. Default `"World"`.

#### Example usage

```
uses: ./.github/actions/hello-world-javascript-action
with:
  who-to-greet: 'Rehab Ragab'
```
