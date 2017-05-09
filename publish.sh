#!/bin/bash

SELF=`basename $0`
SOURCE_BRANCH="master"
DEST_BRANCH="gh-pages"
TMP_DIR="docs"

if [[ -z "$1" ]]; then
  echo "Please enter a git commit message"
  exit
fi

jekyll build -d docs
git add .
git commit -am "$1"

echo "git pushing"
git push origin master
echo "Successfully built and pushed to GitHub."
