#!/bin/sh

git checkout deploy
hugo -t uandme
git commit -am "Update content"
git checkout master
git rm -rf ./*
git checkout deploy public
mv public/* ./
rmdir public
git add .
git commit -m "Update content"
git push origin master -f
echo "done."
git checkout development
