# Node Service Safepoint

API service to get quotes from [Safepoint](https://uat.safepointdc.com/IntelAgent/swagger/index.html) website

## Directory tree

```
.
├── src
│   ├── login.js
│   ├── matching-safepoint.json
│   ├── quote.js
│   └── utils.js
├── tests
│   └── sources
│       ├── HO3.json
│       ├── HO4.json
│       └── HO6.json
├── app.js
├── Dockerfile
├── package.json
├── package-lock.json
├── README.md
```

## How to run

Follow the steps below to run the service in your local environment:

- Install the dependencies with ```npm i```

- Set the environment variables in your **.env** file and use the ```source .env``` command

- Run the **app.js** file with ```node app.js``` 

## Docker Image

Last tag: *coming soon*

## Author

- Daniel Restrepo <daniel.restrepo@cuemby.com>
