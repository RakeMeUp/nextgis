# [Live Site](https://nextgis.netlify.app/)



# API

## Endpoints:

### Single Entry:

`api/entry/:id/` - [GET,PUT]

```
    {
        Project:        string,
        ManagedArea:    string,
        LAS:            string,
        Operator:       string,
        Start:          Date,
        End:            Date,
    }
```



### Array of Entries:

`api/entries/` - [GET, POST]

`api/entries/amount` - [GET]

`api/entries/minutes` - [GET]

Every query needs to have a `userId` like:

`api/entries/amount?userId=123`

You can get the userId from the session variable

### Allowed queries:

`year=[2000 - currentYear]`

`month=[1 - 12]`

`day=[1 - 31]`
