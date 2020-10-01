# cheen_test

## How to run

### 1. Update baseurl and twitter credential

`env.js` is the file to declear baseurl and credential.  
Update `null` to parameter as you like.

```bash
$ cat env.js;
"use strict";

const base_url = null
const bang_count = 1000
const tw = {
  id: null,
  pw: null
}

module.exports = {
  base_url: base_url,
  twitter: tw,
  bang_count: bang_count
}
```

### 2. run

```bash
$ npm install
$ npx codeceptjs run
```

## To ignoreing update of env.js for save your twitter credential

```bash
$ git update-index --assume-unchanged env.js
```
