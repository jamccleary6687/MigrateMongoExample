https://medium.com/techhappily/automate-mongodb-schema-version-control-and-migration-with-aws-lambda-and-migrate-mongo-199a2ebe586a


- npm install migrate-mongo
- migrate-mongo init
- migrate-mongo create dummy
- ??? if running locally, I used atlas shared
    export DB_NAME="local"
    export CONNECTION_STRING="mongodb://localhost:27017"
-   migrate-mongo up
    migrate-mongo down    