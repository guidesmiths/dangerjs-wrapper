# Dangerjs-wrapper

Apply cultural rules during your CI process.

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> Plugin to Apply cultural rules during your CI process.

## Usage

- Install:

```sh
npm i -D dangerjs-wrapper
```

- Create a `dangerfile.js`
- Create the config file following this interface:

````typescript
interface DangerConfig {
  giphyApiKey: string
  minReviewersRequired?: number
  ticketLinkRegExp?: RegExp
  testFilesRegExp?: RegExp
  changedFilesLimit?: number
}
````

- Call the function `checkPullRequest` passing the config as a param

```js
const { checkPullRequest } = require('dangerjs-wrapper')
const dangerConfig = { 
  giphyApiKey: 'example',
  minReviewersRequired:2,
  changedFilesLimit: 5
}

checkPullRequest(dangerConfig)
```
## Changelog

See the GitHub [release history](https://github.com/guidesmiths/dangerjs-wrapper/releases).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
