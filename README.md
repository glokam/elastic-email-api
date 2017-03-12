# elastic-email-api
## Elastic Email API wrapper

[![Latest Stable Version](https://img.shields.io/npm/v/elastic-email-api.svg)](https://www.npmjs.com/package/elastic-email-api)
[![License](https://img.shields.io/npm/l/elastic-email-api.svg)](https://www.npmjs.com/package/elastic-email-api)
[![NPM Downloads](https://img.shields.io/npm/dm/elastic-email-api.svg)](https://www.npmjs.com/package/elastic-email-api)

### Getting started:

```js
npm install elastic-email-api

//or

npm install --save elastic-email-api
```

```js
var elastic = require('elastic-email-api');
```
### How to use:

```js
elastic.request({
    //Options object
    path: '/account/load',
    params: { apikey: 'Your Api Key' },
    callback:  function (responseObj) {
    console.log(responseObj)
    }               
}, file);

//elastic.request(optionObject);
```

__Options object:__
```js
{
 path: '/category/actiontodo', // typeof "string", REQUIRED!
 params: {param1: value, param2: value }, //typeof "object", [optional] but most of Elastic Email API requests needs it!
 callback: function (ResponseObject) {}, //typeof "function", [optional],
 hideApiKey: true // typeof "boolean", default: "false", more info below...
}
```

#### Response Object available in callback

```js
{
error: //null or error message from request module.
response: //object with response from elastic email
path: //full path for API connection
}
```
### Set API Key

```
elastic.setApiKey(YourApiKeyString);
```

If you set API key, you don't need it anymore in  "parameters object". f.e.

```js
elastic.request({
    path: '/account/load',
    callback: function (responseObj) {
        console.log(responseObj)
    }
});
```

#### hideApiKey property in request input

NOTE: You should not sent your api key with "contact/add". If you are using 'setApiKey' & 'request' methods, set the hideApiKey property as true...

```js
elastic.request({
    path: '/contact/add',
    params: {
        email: 'johndoe@email.com',
        publicAccountID: 'your public account ID'
    },
    hideApiKey: true
});
```

But you can still specify a different API Key.

```js
elastic.request({
    path: '/account/load',
    params: {apikey: 'Your SubAccount Api Key String'},
    callback: function (responseObj) {
        console.log(responseObj)
    }
});
//Returns detailed information about your subaccount.
```

### Attachment Upload >= 1.3.0

```js
const fs = require('fs');

var formData = {
  my_file: fs.createReadStream(__dirname + '/images.jpg')
};


elastic.request({
    path: "attachment/upload",
    apikey: 'Your APIkey',
    callback: function (responseObj) {
    console.log(responseObj)
}, formData);
```
