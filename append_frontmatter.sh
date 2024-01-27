#!/bin/bash

files=$(find src/content/docs -name "*.md")

for file in ${files}; do
    base=$(basename ${file})
    sed -i "1s/^/---\ntitle: ${base%.*}\n---\n\n/" ${file}
done