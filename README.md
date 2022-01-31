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

- [Exports](#exports)
- [Installation](#installation)
  - [npm](#npm)
  - [yarn](#yarn)
  - [pnpm](#pnpm)
- [Usage](#usage)
- [Publishing](#publishing)

### Exports

`@nkp/delay` exports both CommonJS and ES modules.

## Installation

### npm

```sh
npm install @nkp/delay
```

### yarn

```sh
yarn add @nkp/delay
```

### pnpm

```sh
pnpm add @nkp/delay
```

## Publishing

To a release a new version:

1. Update the version number in package.json
2. Push the new version to the `master` branch on GitHub
3. Create a `new release` on GitHub for the latest version

This will trigger a GitHub action that tests and publishes the npm package.
