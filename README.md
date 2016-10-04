# lexicon-icon

Lexicon Icon Component

## Setup

1. Install NodeJS >= v0.12.0 and NPM >= v3.0.0, if you don't have it yet. You
can find it [here](https://nodejs.org).

2. Install local dependencies:

  ```
  npm install
  ```

3. Build the code:

  ```
  npm run build
  ```

4. Open the demo at demos/index.html on your browser.

## Contribute

To maintain high traceability and quality, all contributions after the initial setup need to adhere to the following guidelines:

- [Create a github issue](https://github.com/liferay-lexicon/lexicon-icon/issues/new) explaining the issue to be fixed or use feature to be implemented.
- [Send a Pull Request](https://github.com/liferay-lexicon/lexicon-icon/compare) covering the issue.
	- Append `Fixes #` to commit messages to specify the issue that is fixed by the commit
	- Write unit tests for both issues and new features
  - Document the code [using jsdoc](https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler)
	- Pass the gulp _quality_ tests (`lint`, `format`, ~~`complexity`~~)
	- Pass all the tests (`gulp test`) and maintain 100% code coverage (`gulp test:coverage`)
