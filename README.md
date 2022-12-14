# https://nextgis.vercel.app/

To use api, allow ip from anywhere in mongodb

https://cloud.mongodb.com/

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

### Allowed queries:

`year=[2000 - currentYear]`

`month=[1 - 12]`

`day=[1 - 31]`
