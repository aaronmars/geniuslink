# GeniusLink
MindTouch GeniusLink is an integration SDK for MindTouch customer success sites. Integrate your MindTouch site's content, search, and usage data into your CRM, websites, and more!

## Usage

### GeniusLink.init({String} host)
Sets up the environment from which you want to query data

**host** {String} - A MindTouch site homepage url or hostname (e.g. example.mindtouch.us, https://example.mindtouch.us). Please note that HTTPS url's cannot be used on on non-HTTP origins. The system or website utilizing GeniusLink must be HTTPS for an HTTPS connection to a MindTouch site.

### GeniusLink.search({String} query, {Object} options)
The interface to search for help articles from a MindTouch site. Returns a promised object for asynchronous JavaScript programming.

**query** {String} - the terms or advanced query syntax

**options** {Object}
* **page** {Number} - paginate page number (default = 1)
* **limit** {Number} - limit search results to x items per paginated page (default = 10)
* **tags** {String} - Tags by which to filter the results in a comma delimited list (default = '')
* **path** {String} - A specific hierarchy path to filter by (default = '')

**Returns {Promise<Object>}**
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

**Example Usage**
```javascript
GeniusLink.init('https://success.example.com');
GeniusLink.search('example search query').then(response) {

    // get the search result count...
    return response.count;
}).then(count) {

    // do something with the search result count...
});
```

### GeniusLink.user
The interface for working with users on a MindTouch site.

#### GeniusLink.user.getCurrentUser()
...

**Sample Result**

```
dateCreated: "..."
dateLastLogin: "..."
email: "..."
fullname: "..."
href: "..."
id: ...
username: "..."
wikiId: "..."
```

#### GeniusLink.user.getLoginURL()

Returns the path to your MindTouch sites primary login experience.  Returns a string.

**Sample Result**

```
${host}/@app/login/redirect
```
