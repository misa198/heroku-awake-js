# Herokuapp Awake

Keep your herokuapp always awake.

## Requirement
* Node
* Yarn or npm

## Installation

```bash
# If you use npm
$ npm i heroku-awake --save

# If you use yarn
$ yarn add heroku-awake
```

## Usage

```javascript
const express = require('express');
const herokuAwake = require('heroku-awake');

const PORT = 3000;
const url = 'https://your-app.herokuapp.com';
const time = 10;

const app = express();

app.listen(PORT, () => {
  herokuAwake(
    url,
    time // Your application interval is refreshed, default is 25 mins
  );
});
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
