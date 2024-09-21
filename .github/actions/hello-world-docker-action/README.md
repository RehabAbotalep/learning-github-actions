# Hello world docker action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

## `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Example usage

uses: ./.github/actions/hello-world-docker-action

with:

  who-to-greet: 'Rehab Ragab'
