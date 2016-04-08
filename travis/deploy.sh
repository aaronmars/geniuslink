#!/usr/bin/env bash

# check environment
shopt -s nocasematch
if [[ "${TRAVIS}" != "true" ]]; then
    echo "travis/deploy.sh: requires a Travis CI environment."
    exit 0
fi;
if [[ "${TRAVIS_REPO_SLUG}" != "MindTouch/geniuslink" ]]; then
    echo "travis/deploy.sh: requires the MindTouch/geniuslink repository."
    exit 0
fi;
if [[ "${TRAVIS_SECURE_ENV_VARS}" != "true" ]] || [ "${TRAVIS_TAG}" ] || [ ! "${TRAVIS_BRANCH}" ]; then
    echo "travis/deploy.sh: deployment only executes on branches (not tags or releases) with secure environment variables."
    exit 0
fi;
if [ ! "$(git ls-files -o out)" ]; then
    echo "travis/deploy.sh: did not find any build artifacts to push (this should never happen)."
    exit 1
fi;
shopt -u nocasematch

# configure
git config --global user.email "services@mindtouch.com"
git config --global user.name "mtbot"

# decrypt
mkdir -p ${HOME}/.ssh/github
openssl aes-256-cbc -k "${GENIUSLINK_REPO_PASSWORD}" -in travis/mindtouch-geniuslink_rsa.enc -out ${HOME}/.ssh/github/mindtouch-geniuslink_rsa.key -d
chmod 600 ${HOME}/.ssh/github/mindtouch-geniuslink_rsa.key
echo -e "Host github.com\n IdentityFile ${HOME}/.ssh/github/mindtouch-geniuslink_rsa.key" > ${HOME}/.ssh/config
echo "github.com ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==" > ~/.ssh/known_hosts
echo "travis/deploy.sh: successfully decrypted and created the deployment key file for this build."

# branch
git clone git@github.com:"${TRAVIS_REPO_SLUG}".git .deploy
cd .deploy
git fetch origin
echo "travis/deploy.sh: branching ${TRAVIS_BRANCH} from ${TRAVIS_COMMIT}."
git checkout --no-track -b "${TRAVIS_BRANCH}" "${TRAVIS_COMMIT}"
if [ `git branch -r | egrep "^[[:space:]]+origin/${TRAVIS_BRANCH}$"` ]; then
    echo "travis/deploy.sh: merging existing ${TRAVIS_BRANCH} from ${TRAVIS_REPO_SLUG}."
    git merge --no-edit origin/"${TRAVIS_BRANCH}"
fi;

# deploy build
echo "travis/deploy.sh: copying build artifacts and staging for commit..."
mkdir -p dist
cp -a ../out/* dist
git add -f -v dist/*
echo "travis/deploy.sh: build artifacts copied and staged for commit."
git commit -m "Build ${TRAVIS_BRANCH} #${TRAVIS_BUILD_NUMBER} [ci skip]
Commits ${TRAVIS_COMMIT_RANGE}
https://travis-ci.org/MindTouch/geniuslink/builds/${TRAVIS_BUILD_ID}"
echo "travis/deploy.sh: deploying build artifacts to ${TRAVIS_BRANCH}..."
git diff origin/"${TRAVIS_BRANCH}" --name-only
git push origin "${TRAVIS_BRANCH}"
if [ $? -ne 0 ]; then
    echo "travis/deploy.sh: could not deploy build artifacts to ${TRAVIS_BRANCH}."
    exit 1
fi;
echo "travis/deploy.sh: successfully deployed build artifacts to ${TRAVIS_BRANCH}."
