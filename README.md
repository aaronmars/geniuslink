# MindTouch GeniusLink SDK
MindTouch GeniusLink SDK is an integration library for MindTouch customer success sites. Integrate your MindTouch site's content, search, and usage data into your CRM, websites, and more!

[![travis-ci.org](https://travis-ci.org/MindTouch/geniuslink.svg?branch=master)](https://travis-ci.org/MindTouch/geniuslink)
[![codecov.io](https://codecov.io/github/MindTouch/geniuslink/coverage.svg?branch=master)](https://codecov.io/github/MindTouch/geniuslink?branch=master)

## Delivery

This library can be included in your web application project as a standalone script by including the following in your HTML:
```html
<script async src="https://ajax.mindtouch.com/geniuslink/{tag}/geniuslink.min.js"></script>
```
{tag} represents the GitHub release of the library (ex: https://ajax.mindtouch.com/geniuslink/1.2.3-beta.1/geniuslink.min.js). Available release tags can be found on [this GitHub page](https://github.com/MindTouch/geniuslink/tags).

## Usage

### new GeniusLink({Object} configuration)
Initializes a GeniusLink integration object.

**configuration** {Object} - An object containing other initialization values. The following parameters are supported:

| Option | Required | Description |
| ------ | -------- | ----------- |
| host   | true     | A MindTouch site homepage url or hostname * |
| token  | true     | The browser developer token for the hostname's domain |

*(e.g. `example.mindtouch.us`, `https://example.mindtouch.us`). Please note that an insecure HTTP connection cannot be invoked from a secure HTTPS origin.

### GeniusLink.search({String} query, {Object} options)
The interface to search for help articles from a MindTouch site. Returns a promised object for asynchronous JavaScript programming.

**query** {String} - the terms or advanced query syntax

**options** {Object}
* **page** {Number} - paginate page number (default = 1)
* **limit** {Number} - limit search results to x items per paginated page (default = 10)
* **tags** {String} - Tags by which to filter the results in a comma delimited list (default = '')
* **type** {String} - Type or types to filter the results in a comma delimited list (default = '') types: `wiki`, `document`, `image`, `binary`
* **path** {String} - A specific hierarchy path to filter by (default = '')

**Returns {Promise\<Object\>}**
```
{
    count: "10"
    queryCount: "15"
    queryId: "..."
    ranking: "..."
    recommendationCount: "0"
    result: [
    {
        author: "..."
        content: "..."
        dateModified: Date
        id: "..."
        mime: "..."
        page: {}
        rank: "..."
        title: "..."
        uri: "..."
        uriTrack: "..."
    },
    { ... }
    ]
}
```

**Sample**
```javascript
var gl = new GeniusLink({
    host: 'https://success.example.com',
    token: '12345'
});
gl.search('example search query').then(function(response) {

    // get the search result count...
    return response.result;
}).then(function(results) {

    // do something with the search results...
    results.forEach({ ... });
});
```

### GeniusLink.User.getCurrentUser()
Gets the MindTouch site user that GeniusLink requests will be performed as. NOTE: The MindTouch API currently does not allow authenticated requests over CORS (Cross-Origin Resource Sharing). As a result, all requests will be in the context of an anonymous site visitor.

**Returns {Promise\<Object\>}**
```
{
    dateCreated: "..."
    dateLastLogin: "..."
    email: "..."
    fullname: "..."
    href: "..."
    id: ...
    username: "..."
    wikiId: "..."
}
```

**Sample**
```javascript
var gl = new GeniusLink({
    host: 'https://success.example.com',
    token: '12345'
});
gl.User.getCurrentUser().then(function(response) {

    // get the email address...
    return response.email;
}).then(email) {

    // do something with the email address...
});
```

### GeniusLink.User.getLoginUrl()
Gets the the URL to the MindTouch site primary login experience.

**Returns {String}**
```
${host}/@app/login/redirect
```

**Sample**
```javascript
var gl = new GeniusLink({
    host: 'https://success.example.com',
    token: '12345'
});
window.location = gl.User.getLoginUrl();
```

### GeniusLink.User.getInsights()
Gets the activity of a particular user based off a system-defined token.  Currently, user page views and searches are reported.

**Returns {Promise\<Object\>}**
```
{
    count: ...,
    upto: ...,
    since: ...,
    event:[
        /// array of user events
    ]
}
```

**Sample**
```javascript
var gl = new GeniusLink({
    host: 'https://success.example.com',
    token: '12345'
});
var token = 'abc123';
gl.User.getInsights(token).then(function(response) {

    // Use the event data
    response.event.forEach(function(event) {
        //...
    });
});
```

### GeniusLink.Article.createUnpublished({Object} params)
Create an unpublished article on the MindTouch site.

**params** {Object}
* **path** {String} - The path of the new page (required)
* **content** {String} - The initial contents of the page (default = '')
* **title** {String} - The display title of the new page (default = inferred from the path)
* **type** {String} - Article type of the new page (default = 'article:topic')
  * Valid types: `article:topic-portfolio`, `article:topic-category`, `article:topic-guide`, `article:topic`, `article:howto`, `article:reference`
* **tags** {Array} - Initial tags to be set on the new page (default = [])

**Returns {Promise\<Object\>}** The Object from the returned Promise contains information about the newly created article.

**Sample**
```javascript
var gl = new GeniusLink({
    host: 'https://success.example.com',
    token: '12345'
});
gl.Article.createUnpublished({
    path: 'path/to/article',
    content: 'Article contents.',
    tags: [ 'foo', 'bar' ]
}).then(function(unpublishedArticle) {
    console.log('Article created with ID ' + unpublishedArticle.id);
});
```

### GeniusLink.Article.createPublished({Object} params)
Create a published article on the MindTouch site.

**params** {Object}
* **path** {String} - The path of the new page (required)
* **content** {String} - The initial contents of the page (default = '')
* **title** {String} - The display title of the new page (default = inferred from the path)
* **type** {String} - Article type of the new page (default = 'article:topic')
  * Valid types: `article:topic-category`, `article:topic-guide`, `article:topic`, `article:howto`, `article:reference`
* **tags** {Array} - Initial tags to be set on the new page (default = [])

**Returns {Promise\<Object\>}** The Object from the returned Promise contains information about the newly created article.

**Sample**
```javascript
var gl = new GeniusLink({
    host: 'https://success.example.com',
    token: '12345'
});
gl.Article.createPublished({
    path: 'path/to/article',
    content: 'Article contents.',
    tags: [ 'foo', 'bar' ]
}).then(function(unpublishedArticle) {
    console.log('Article created with ID ' + unpublishedArticle.id);
});
```
