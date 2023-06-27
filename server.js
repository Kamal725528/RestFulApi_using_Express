const express=require("express");
const { json } = require("express/lib/response");
const app=express();

//middleware

app.use(express.json());    // taking json input
app.use(myMiddleware);

function myMiddleware(req, res, next){
    console.log("inside the middleware");
    next();
}

/* stich routes to the server*/

require("./Routes/idea.routes")(app);

//starting the server

app.listen(8080, ()=>{
    console.log("server is started at 8080");
})