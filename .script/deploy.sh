#!/bin/bash
set -x
if [ $TRAVIS_BRANCH == 'master' ] ; then
    # Initialize a new git repo in _site, and push it to our server.
    mkdir _site
    cd _site
    git init

    ssh-keyscan 45.79.161.79 >> ~/.ssh/known_hosts
    git remote add deploy "turbo@45.79.161.79:/var/www/public"
    git config user.name "Turbo"
    git config user.email "tienthinhturbo@gmail.com"
    
    ls -la
    git add dist
    git commit -m "Deploy"
    git push --force deploy master
else
    echo "Not deploying! This branch is not Master."
fi