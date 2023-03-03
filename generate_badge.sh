#!/bin/bash

# Parse the values from the txt file
value=$(grep 'value:' timestamp.txt | awk '{print $2}')

# Generate the badge URL using Shields.io
badge_url="https://img.shields.io/badge/value-$value-green.svg"

# Output the badge URL
echo $badge_url
