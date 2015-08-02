#!/bin/sh

git checkout deploy
hugo -t uandme
git commit -am "Update content"
git checkout master
git rm -rf ./*
git checkout deploy public
mv public/* ./
rmdir public
git commit -am "Update content"
git push origin master
