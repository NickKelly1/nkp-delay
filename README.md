# @nkp/delay

[![npm version](https://badge.fury.io/js/%40nkp%2Fdelay.svg)](https://www.npmjs.com/package/@nkp/delay)
[![deploy status](https://github.com/NickKelly1/nkp-delay/actions/workflows/release.yml/badge.svg)](https://github.com/NickKelly1/nkp-delay/actions/workflows/release.yml)
[![known vulnerabilities](https://snyk.io/test/github/NickKelly1/nkp-delay/badge.svg)](https://snyk.io/test/github/NickKelly1/nkp-delay)

Zero-dependency utility function to resolve a promise after the given duration.

```ts
import { delay } from '@nkp/delay';
import { performance } from 'perf_hooks';

function run() {
  const start = performance.now();

  // wait for 2ms before continuing
  await delay(2_500);

  const end = performance.now();

  console.log(`took: ${end - start}ms`);
}

run();
```

## Table of contents

- [Installation](#installation)
  - [npm](#npm)
  - [yarn](#yarn)
  - [pnpm](#pnpm)
  - [Exports](#exports)
- [Usage](#usage)
- [Updating Dependencies](#updating-dependencies)

## Installation

### NPM

```sh
npm install @nkp/delay
```

### Yarn

```sh
yarn add @nkp/delay
```

### PNPM

```sh
pnpm add @nkp/delay
```

### Exports

`@nkp/delay` targets CommonJS and ES modules. To utilise ES modules consider using a bundler like `webpack` or `rollup`.

## Usage

---USAGE-TEXT---

## Updating dependencies

To update dependencies run one of

```sh
# if npm
# update package.json
npx npm-check-updates -u
# install
npm install

# if yarn
# update package.json
yarn create npm-check-updates -u
# install
yarn

# if pnpm
# update package.json
pnpx npm-check-updates -u
# install
pnpm install
```

## Publishing

To a release a new version:

1. Update the version number in package.json
2. Push the new version to the `master` branch on GitHub
3. Create a `new release` on GitHub for the latest version

This will trigger a GitHub action that tests and publishes the npm package.
