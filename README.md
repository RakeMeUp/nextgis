# [Live Site](https://nextgis.netlify.app/)

Gis logger is a personal Full-Stack Logger to keep up with my work.

Stores excel rows into a database and provides statistics out of them.

Google OAuth 2.0 is provided, multiple accounts can have their own set of data.

### Tech:

- `TypeScript`
- `NextJS` / `Next-Auth`
- `MongoDB` / `Mongoose`
- `Tailwind` / `Headless UI` / `Toastify`


## API Endpoints

### Single Entry:

`api/entry/:id/` - [GET,PUT]

```
    {
        data: {
            Project:        string,
            ManagedArea:    string,
            LAS:            string,
            Operator:       string,
            Start:          Date,
            End:            Date,
        },
        userId: string
    }
```



### Array of Entries:

`api/entries/` - [GET, POST]

`api/entries/amount` - [GET]

`api/entries/minutes` - [GET]

Every query needs to have a `userId`:

`api/entries/amount?userId=123xyz`

You can get the `userId` from the session variable

### Allowed queries:

`year=[2000 - currentYear]`

`month=[1 - 12]`

`day=[1 - 31]`
