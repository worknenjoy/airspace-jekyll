#!/bin/sh

echo "git pushing to gh-pages"
jekyll build && \
  touch _site/.nojekyll
git push origin --delete gh-pages
git subtree push --prefix _site origin gh-pages
