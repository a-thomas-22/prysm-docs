#!/bin/bash

# This script finds and replaces broken links in markdown files
# It replaces "/prysm/docs/docs/" with "/prysm/docs/"

# Find all markdown files in the docs directory
find ./docs -type f -name "*.md" | while read file; do
  echo "Processing $file"
  # Replace "/prysm/docs/docs/" with "/prysm/docs/"
  sed -i '' 's|/prysm/docs/docs/|/prysm/docs/|g' "$file"
  
  # Also replace any remaining "/docs/" links with "/"
  sed -i '' 's|\(/docs/[^)]*\)|\1|g' "$file"
  
  # Replace links with the pattern "/prysm/docs/docs/" again to catch any that were missed
  grep -l "/prysm/docs/docs/" "$file" > /dev/null 2>&1
  if [ $? -eq 0 ]; then
    echo "Found more links to fix in $file"
    sed -i '' 's|/prysm/docs/docs/|/prysm/docs/|g' "$file"
  fi
done

echo "Link replacement complete!"
