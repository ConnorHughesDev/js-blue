require("dotenv").config();
const Express = require('express'); //Here we require the use of the 'express' npm package that we've installed in our dependencies.
const app = Express(); //We create an instance of express. We're actually firing off a top-level 'express' function, a function exported by the Express module. This allows us to create an Express app.
const dbConnection = require("./db");

const controllers = require("./controllers");

app.use(Express.json());

app.use("/user", controllers.userController);

// app.use(require("./middleware/validate-jwt"));  This option is best when you have a controller or multiple controllers where all of the routes need to be restricted. 
app.use("/journal", controllers.journalController);

dbConnection.authenticate()
    .then(() => dbConnection.sync())
    .then(() => {
        app.listen(3000, () => { //'app.listen' will use express to start a UNIX socket and listen for connections on the given path. The given path is 'localhost:3000' indicated by the parameter of 3000.
            console.log(`[Server]: App is listening on 3000.`); //We call an anonymous callback function when the connection happens with a simple 'console.log'. This allows us to see a message with the port that the server is running on.
        });
    })
    .catch((err) => {
        console.log(`[Server]: Sercer crashed. Error = ${err}`)
    })
