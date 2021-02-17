## Dependencies to import

express
cors
mongoose

## Create server folder

npm init
install dependencies
create .gitignore file

### index.js

import express. Call express from require express, initialise an app from express(), import router from router file set the port.

Serve static files through express.static - use path to client folder. Set up bodyparsing and sort out the router.

app.use(cors)

Start listening to check that the server is listening.

## Create models folder

### newModel.js

Initialise mongoose and create schema - give schema a lowercase name.

Create an instance of mongoose.model with an uppercase version of the name as the const and the dbName and schemaName as args.

Export created const.

## Create controllers folder

### new-controller.js

Import newModel

export functions that we want to use in the routing logic.

Remember that with koa we use ctx as the args and check if functions need to be async await - especially if referencing a database.
