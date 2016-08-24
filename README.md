# elastic-email-api
## Elastic Email API wrapper

### Getting started:

```
npm install elastic-email-api

//or

npm install --save elastic-email-api
```

```
var elastic = require('elastic-email-api');
```
### Syntax

```

elastic.request('/account/load', {apikey: 'Your Api Key'}, function (responseObj) {
    console.log(responseObj)
})

//elastic.request(pathSTR, parametersObj, [callback: optional])

```

or you can use wrapper methods

```
elastic.Account.Load({apikey: 'Your Api Key'}, function (responseObj) {
    console.log(responseObj)
}))
```

Category object name (fe: "Account", "Log", "Contact") in most case starts with capital letter. There is one exception: "SMS".
Action method name (fe: "Load", "LoadHistory", "GetStatus") are CamelCase with first capital letter.

This is similar to official [Elastic Email API Documentation](http://api.elasticemail.com/public/help)

### Set API Key

```
elastic.setApiKey(YourApiKeyString);
```

If you set API key, you don't need it anymore in  "parameters object". f.e.

```
elastic.request('/account/load', {}, function (responseObj) {
    console.log(responseObj)
});
elastic.Account.Load({}, function (responseObj) {
    console.log(responseObj)
}))
//Returns detailed information about your account.
//NOTE that empty object is require .
```

But you can still specify a different API Key.

```

elastic.request('/account/load', {apikey: 'Your SubAccount Api Key String'}, function (responseObj) {
    console.log(responseObj)
});
elastic.Account.Load({apikey: 'Your SubAccount Api Key String'}, function (responseObj) {
    console.log(responseObj)
}));

//Returns detailed information about your subaccount.
```

### Fourth "request" parameter 

NOTE: You should not sent your api key with "contact/add". If you are using 'setApiKey' & 'request' methods, specify the fourth parameter as true...

```
elastic.request('/contact/add', {email: 'johndoe@email.com', publicAccountID: 'your public account ID'}, function (responseObj) {console.log(responseObj)}, true);
//or 
elastic.request('/contact/add', {email: 'johndoe@email.com', publicAccountID: 'your public account ID'}, undefined, true);
```

or just use safe wrapper method..

```

elastic.Contact.Add({email: 'johndoe@email.com', publicAccountID: 'your public account ID'})

```

### Response Object available in callback

```
{
error: //null or error message from request module.
response: //object with response from elastic email
path: //full path for API connection
}
```