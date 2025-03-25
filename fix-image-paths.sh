#!/bin/bash

# This script finds and replaces broken image paths in markdown files

# Find all markdown files in the docs directory
find ./docs -type f -name "*.md" | while read file; do
  echo "Processing $file"
  
  # Replace static/images/ with static/docs/images/
  sed -i '' 's|static/images/|static/docs/images/|g' "$file"
  
  # Replace @site/static/images/ with @site/static/images/
  sed -i '' 's|@site/static/images/|@site/static/images/|g' "$file"
  
  # Replace @site/partials/ with @site/docs/partials/
  sed -i '' 's|@site/partials/|@site/docs/partials/|g' "$file"
  
  # Replace @site/install/partials/ with @site/docs/install/partials/
  sed -i '' 's|@site/install/partials/|@site/docs/install/partials/|g' "$file"
  
  # Replace @site/monitoring/partials/ with @site/docs/monitoring/partials/
  sed -i '' 's|@site/monitoring/partials/|@site/docs/monitoring/partials/|g' "$file"
  
  # Replace @site/troubleshooting/partials/ with @site/docs/troubleshooting/partials/
  sed -i '' 's|@site/troubleshooting/partials/|@site/docs/troubleshooting/partials/|g' "$file"
done

echo "Image path replacement complete!"
