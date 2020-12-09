# Heroku Awake

<p align="center">
  <img src="https://res.cloudinary.com/dumfvnj9f/image/upload/v1604343810/heroku-awake/dyno_weedab.png" width="256px" />
  <p align="center" style="font-size: 20px; color: #79589F">
    Keep your herokuapp always awakes.
  </p>
  <p align="center">
    <img src="https://camo.githubusercontent.com/c031efcc66c1bfc646f4369604955b26f3e1dbcb/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f657870726573732e737667" alt="NPM Version" data-canonical-src="https://img.shields.io/npm/v/express.svg" style="max-width:100%;">
    <img src="https://camo.githubusercontent.com/832d01092b0e822178475741271b049a2e27df13/68747470733a2f2f62616467656e2e6e65742f62616467652f2d2f547970655363726970742f626c75653f69636f6e3d74797065736372697074266c6162656c" alt="ts" data-canonical-src="https://badgen.net/badge/-/TypeScript/blue?icon=typescript&amp;label" style="max-width:100%;">
    <img src="https://camo.githubusercontent.com/195f84d670ceb5a1d47c755d24a991da4b902440/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f406e6573746a732f636f72652e737667" alt="Package License" data-canonical-src="https://img.shields.io/npm/l/@nestjs/core.svg" style="max-width:100%;">
  </p>
  <p align="center" style="font-size: 14px;">
    Support Javascript and Typescript
  </p>
</p>

## Requirement

- Node
- Yarn or NPM

## Installation

```bash
$ npm i heroku-awake --save
# OR
$ yarn add heroku-awake
```

## Usage

### Javascript
```javascript
const express = require("express");
const herokuAwake = require("heroku-awake");

const PORT = 3000;
const url = "https://your-app.herokuapp.com";

const app = express();

app.listen(PORT, () => {
  // Default application refresh time is 25 mins
  herokuAwake(url);

  // If you want to change application refresh time
  const time = 10;
  herokuAwake(url, time);
});
```


### Typescript
```typescript
import * as express from "express";
import * as herokuAwake from "heroku-awake";

const PORT = 3000;
const url = "https://your-app.herokuapp.com";

const app = express();

app.listen(PORT, () => {
  // Default application refresh time is 25 mins
  herokuAwake(url);

  // If you want to change application refresh time
  const time = 10;
  herokuAwake(url, time);
});
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
