#!/bin/bash

# This script finds and replaces broken links in markdown files
# It handles multiple patterns of broken links

# Find all markdown files in the docs directory
find ./docs -type f -name "*.md" | while read file; do
  echo "Processing $file"
  
  # Replace "/prysm/docs/docs/" with "/prysm/docs/"
  sed -i '' 's|/prysm/docs/docs/|/prysm/docs/|g' "$file"
  
  # Replace "/docs/" with "/"
  sed -i '' 's|/docs/|/|g' "$file"
  
  # Replace any remaining instances of "/prysm/docs/docs/" (in case they were missed)
  sed -i '' 's|/prysm/docs/docs/|/prysm/docs/|g' "$file"
  
  # Fix any links that might have been double-processed (e.g., "//" instead of "/")
  sed -i '' 's|//|/|g' "$file"
  
  # Fix any links that might have lost their leading slash
  sed -i '' 's|\(href="\)\([a-zA-Z]\)|\1/\2|g' "$file"
  sed -i '' 's|\(linking to \)\([a-zA-Z]\)|\1/\2|g' "$file"
  
  # Fix any links with "/prysm/docs/docs/" that might still exist
  sed -i '' 's|/prysm/docs/docs/|/prysm/docs/|g' "$file"
done

echo "Link replacement complete!"
