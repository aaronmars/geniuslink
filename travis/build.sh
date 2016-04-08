#!/usr/bin/env bash

# check environment
if [ "${TRAVIS_TAG}" ]; then
    echo "travis/build.sh: releases/tags do not require a build."
    exit 0
fi;

# gulp
if [[ "${TRAVIS_SECURE_ENV_VARS}" == "true" ]]; then
    node_modules/.bin/gulp test inspect
    node_modules/.bin/gulp build
else
    node_modules/.bin/gulp inspect
    node_modules/.bin/gulp build
fi
