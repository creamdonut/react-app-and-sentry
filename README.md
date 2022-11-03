# React + Sentry releases and source-maps configuration.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Whats going on here ?

This repo is a demo for configure Sentry to create releases with source maps excluding it from React production build. 

[Here is the article](https://dev.to/creamdonut/react-sentry-releases-and-source-maps-configuration-2jjp).

Releases ID's based on git system, so you probably need it.

## How to

Replace constants in `.env` file.

Replace constants in `.sentryclirc` file.

## Whats in package.json

### `yarn build`

Creating production build of react app, passing REACT_APP_SENTRY_RELEASE as a short git commit ID as a release name and invoke `upload-source-maps`

### `upload-source-maps`

Remove old `sourceMap` folder, transfer `.map` files from build directory and invoke `sentry.js` with REACT_APP_SENTRY_RELEASE = short git commit ID as a release name

## Additional files

### `.sentryclirc`

`.sentryclirc` file containes credentials for Sentry

### `sentry.js`

`sentry.js` script creating release, append source maps to it and upload to sentry
