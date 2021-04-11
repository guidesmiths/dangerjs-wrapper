## 1.0.10

### package.json file

- Remove the `tslint` package due to it's deprecated since December 2019 when the development/maintenance team joined to the ESLint.
- Install `eslint` module and generate the `.eslintrc.json` file via CLI tool with the next configuration:
  - To check syntax, find problems, and enforce code style.
  - JavaScript modules (import/export).
  - Configured not for React nor VueJS projects.
  - The project uses TypeScript.
  - The project runs in Browser and Node.
  - Use the Standard style guide for ESLint.
  - Configuration file in JSON format.
  - Additionally, the `jest: true` option was attached to the `env` configuration object into the `.eslintrc.json` file, post configuration.
- Remove the `prettier` module due to the style definition has been delegated to ESLint. Due to that, there were also deleted the `prettier`, `prettier-write` and `prettier-project` scripts.
- Update Husky to version 6 and define the specific hooks.
  - Create the `commit-msg` hook.
  - Edit the `pre-commit` in order to invoke `lint-staged` instead of the `lint` script.
  - Create the `pre-push` hook.
  - Inlcude the `post-merge` hook.
  - Remove the Husky configuration from the `package.json` file.
- Update the `lint:fix` script from `tslint \"src/**/*.ts\" --fix` to `npx eslint --fix`.
- Update the `lint-staged` configuration and remove the `precommit` script.
- Update all Jest related modules due to the next error was found during the installation process:
  ```sh
  npm ERR! code ERESOLVE
  npm ERR! ERESOLVE unable to resolve dependency tree
  npm ERR! 
  npm ERR! While resolving: dangerjs-wrapper@1.0.9
  npm ERR! Found: jest@26.6.3
  npm ERR! node_modules/jest
  npm ERR!   dev jest@"^26.6.3" from the root project
  npm ERR! 
  npm ERR! Could not resolve dependency:
  npm ERR! peer jest@"^20.0.0 || ^20.1.0-alpha.1 || ^21.0.0-alpha.1" from ts-jest@20.0.14
  npm ERR! node_modules/ts-jest
  npm ERR!   dev ts-jest@"^20.0.0" from the root project
  ```
  After that, create the `jest.config.ts` file with the needed configuration and removigin it from the `package.json` file.
- Packages and modules security.
  - Install the `lockfile-lint` module.
  - Define the scripts: `deps`, `deps:audit`, `deps:sec-scan` and `lint:lockfile`.
- Update the `esdoc` optional dependency. After the update process, some security vulnerability are detected yet.
  Based on that situation and due to the project documentation is not created using this module right now, the module and its related scripts have been removed.
  Affected scripts:
  - `"predocs": "rm -rf docs/"`
  - `"docs": "esdoc -c .esdoc.json"`
  Affected optional module:
  - esdoc (`npm i --save-optional esdoc@^1.1.0`)
  - Install a versioned module of `danger` as `dependency` (not `devDependency`).
- Update the `build` script in order to reference the specific `tsconfig.build.json` file.
- Update the `main` and `types` properties in order to aim to `./dist/index.js` and `./dist/index.d.ts` repectively. The `./` was mandatory.
- Include the `files` field in order to publish only the `dist` folder in the NPM module and not the whole repository code.

## tslint.json file

- Remove the file due to its functions are going to be assumed by ESLint.

"danger": "*",
"prettier": "^1.3.1",

## tsconfig.json file

- Original content:
  ```json
  {
    "compilerOptions": {
      "target": "es6",
      "module": "commonjs",
      "rootDir": "src",
      "outDir": "dist",
      "allowJs": false,
      "pretty": true,
      "strictNullChecks": true,
      "declaration": true
    },
    "lib":["es2017"],
    "include": [
      "src/**/*.ts",
      "src/**/*.tsx",
      "dangerfile.ts"
    ],
    "exclude": [
      "dangerfile.ts",
      "node_modules",
      "dist"
    ]
  }
  ```
- Reconfigure the file content with the next modifications:
  - Enable the `allowJs: true` property in order to provide compatibility with future developments.
  - Enable the `strict: true` property and remove the `strictNullChecks: true` due to this last one is already included in the first one.
  - Enable the `esMoudleInterop: true` property in order to provide compatibility with future developments.
  - Enable the `skipLibCheck: true` property in order to avoid waste time checking already trusted libs.
  - Enable the `forceConsistentCasingInFileName: true` in order to provide a correct behavior between name definitions based on the OS.
  - Enable the `resolveJsonModule: true` in order to allow use JSON files as modules content.
  - Remove the `pretty: true` property because it doesn't exist as compiler option for TypeScript.
  - Edit the `include` property in order to check any file located into the `src/` folder.
  - Remove the `dangerfile.ts` reference from the `include` and `exclude` properties because it was repeated and the file doesn't exist in the project.
  - Update the `lib` property in order to obtain the most updated features.

## tsconfig.build.json file

- Create the file in order to exclude the testing files from the final compiled result.

## tsconfig.paths.json file

- Create the file in order to provide path aliases which will be used in the code with the `@` prefix.

## yarn.lock file

- Remove this file because it's not necessary.

## src/index.ts

- Edit the final module export.

## Other code included into src/

- Update its content to the ESLint rules.

## TO-DO

- Configure the GIT hook for `pre-commit` once the `commitlint` configuration is completely defined.
  - `npx husky add .husky/pre-commit "npx commitlint"`