#!/bin/sh

git branch | grep deploy
if [ "$?" -eq 0 ]
then
  git checkout deploy
else
  git checkout -b deploy
fi
git merge --no-commit develop
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
git checkout develop
