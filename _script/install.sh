#!/bin/bash

set -x # Show the output of the following commands (useful for debugging)

sudo apt-get install ruby-full
    
# Import the SSH deployment key
openssl aes-256-cbc -K $encrypted_abf1c25cba00_key -iv $encrypted_abf1c25cba00_iv -in travis-pri.enc -out travis-pri -d
rm travis-pri.enc # Don't need it anymore
chmod 600 travis-pri
mv travis-pri ~/.ssh/id_rsa