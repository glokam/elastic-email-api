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
### Syntax

#### Wrapper Methods - Recommended!

```js
elastic.Account.Load({apikey: 'Your Api Key'}, function (responseObj) {
    console.log(responseObj)
})

// elastic.Category.ActionToDo(paramsObj, [callback; optional]);
```

Category object name (fe: "Account", "Log", "Contact") in most case starts with capital letter. There is one exception: "SMS".
Action method name (fe: "Load", "LoadHistory", "GetStatus") are CamelCase with first capital letter.

This is similar to official [Elastic Email API Documentation](http://api.elasticemail.com/public/help)

#### Request Method >= 1.1.0

__Pleas try to use this only in special cases; when you can't use wrapper methods__

```js

elastic.request({
    path: '/account/load',
    params: { apikey: 'Your Api Key' },
    callback:  function (responseObj) {
    console.log(responseObj)
    }               
});

//elastic.request(optionObject);

```

__Input property:__
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

or just use safe wrapper method..

```js

elastic.Contact.Add({email: 'johndoe@email.com', publicAccountID: 'your public account ID'})

```

### Set API Key

```
elastic.setApiKey(YourApiKeyString);
```

If you set API key, you don't need it anymore in  "parameters object". f.e.

```js
//request method
elastic.request({
    path: '/account/load', 
    callback: function (responseObj) {
        console.log(responseObj)
    }
})

//wrapper method

elastic.Account.Load({}, function (responseObj) {
    console.log(responseObj)
}))

//Returns detailed information about your account.
//NOTE that empty object is require in wrapper method .
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

elastic.Account.Load({apikey: 'Your SubAccount Api Key String'}, function (responseObj) {
    console.log(responseObj)
}));

//Returns detailed information about your subaccount.
```
### Attachment Upload

```js
var formData = {
  my_file: fs.createReadStream(__dirname + '/images.jpg')
};


elastic.Attachment.Upload({apikey: 'Your APIkey'}, function (responseObj) {
    console.log(responseObj)
}, formData);
```
