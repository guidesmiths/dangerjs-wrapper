# Dangerjs-wrapper

Apply cultural rules during your CI process.

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> Plugin to Apply cultural rules during your CI process.

## Usage

Install:

```sh
npm i -D dangerjs-wrapper
```

At a glance:
```js
// dangerfile.js
const {
  checkReviewers,
  checkChangedFiles,
  checkTicketLinkInPrBoby,
  checkUpdatedTests
} = require('dangerjs-wrapper')
checkReviewers()
checkChangedFiles()
checkTicketLinkInPrBoby()
checkUpdatedTests()

```
## Changelog

See the GitHub [release history](https://github.com/guidesmiths/dangerjs-wrapper/releases).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
