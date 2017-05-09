#!/bin/bash

SOURCE_BRANCH="master"
TMP_DIR="_site"

#if [[ -z "$1" ]]; then
#  echo "Please enter a git commit message"
#  exit
#fi

#jekyll build -d $TMP_DIR
#git add .
#git commit -am "$1"

#echo "git pushing"
#git push origin master
#echo "Successfully built and pushed to GitHub."

#jekyll build

rm -rf .git/subtree-cache/

git push origin --delete gh-pages
git subtree push --prefix _site/ origin gh-pages


