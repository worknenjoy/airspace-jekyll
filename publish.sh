#!/bin/bash

SELF=`basename $0`
SOURCE_BRANCH="master"
DEST_BRANCH="gh-pages"
TMP_DIR="tmp"

git checkout $SOURCE_BRANCH
jekyll build -d $TMP_DIR
echo "git pushing to gh-pages"
#git push origin --delete gh-pages
git subtree push --prefix $TMP_DIR origin gh-pages
