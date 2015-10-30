# GeniusLink
MindTouch GeniusLink for CRM

## Interfaces

### GeniusLink.init(host)
This sets up the environment from which you want to query data.  The host parameter is a MindTouch site.

### GeniusLink.search
The interface to search for help articles on a MindTouch site.

#### GeniusLink.search.query(query, { options })
Returns a promise for asynchronous 

**query** - the term that you would like to search for.

**options**
* **page** - The page of results, default = 1
* **limit** - The total number of results, default = 10
* **tags** - Tags by which to filter the results in a comma delimited list, default = ''
* **path** - A specific hierarchy path to filter by, default = ''

**Sample Result**
```
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
    }
]
```

### GeniusLink.user
The interface for working with users on a MindTouch site.

#### GeniusLink.user.getCurrentUser()
Returns the currently logged in user. 

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