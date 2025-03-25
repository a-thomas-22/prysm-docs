#!/bin/bash

# This script finds and replaces broken external links in markdown files
# It fixes "https:/" to "https://"

# Find all markdown files in the docs directory
find ./docs -type f -name "*.md" | while read file; do
  echo "Processing $file"
  
  # Replace "https:/" with "https://"
  sed -i '' 's|https:/|https://|g' "$file"
done

echo "External link replacement complete!"
