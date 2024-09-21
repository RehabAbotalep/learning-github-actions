#!/bin/bash

# Capture the input argument passed by GitHub Actions
echo "Hello ${INPUT_WHO_TO_GREET:-World}."
echo "Goodbye ${INPUT_WHO_TO_GREET:-World}!"
