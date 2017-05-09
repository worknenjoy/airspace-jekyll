#!/bin/sh

echo "git pushing to gh-pages"
bundle exec jekyll build
git push origin --delete gh-pages
git subtree push --prefix _site origin gh-pages
