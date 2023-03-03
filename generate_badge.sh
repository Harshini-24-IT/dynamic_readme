#!/bin/bash

# Parse the values from the txt file
value=$(grep 'Timestamp:' timestamp.txt )

# Generate the badge URL using Shields.io
badge_url="https://img.shields.io/date/value"


# Output the badge URL
echo $badge_url
