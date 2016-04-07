#!/usr/bin/env bash

# gulp
if [[ "${TRAVIS_SECURE_ENV_VARS}" == "true" ]]; then
    node_modules/.bin/gulp test inspect
    node_modules/.bin/gulp build
else
    node_modules/.bin/gulp inspect
    node_modules/.bin/gulp build
fi
