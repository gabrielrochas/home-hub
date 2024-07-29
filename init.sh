#!/bin/bash
# Install the base dependencies
pnpm install

# Install dependencies for each micro-frontend and the root-config
for dir in root navbar user dashboard lights home; do
  cd $dir
  printf "Installing dependencies for $dir\n"
  pnpm install
  cd ..
done

echo "All micro-frontends are starting. Please wait a few moments."
