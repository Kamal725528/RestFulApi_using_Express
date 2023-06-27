const ideaController=require("../Controller/idea.controller");

/* defines routes uri as 
  GET127.0.0.1:8080/ideaApp/v1/ideas */

  module.exports=(app)=>{
    app.get("/ideaApp/v1/ideas",ideaController.fetchAllIdeas);

    //post request
    app.post("/ideaApp/v1/ideas",ideaController.createIdea);

    //update request
    app.put("/ideaApp/v1/ideas/:id",ideaController.updateIdea);

    //delete request
    app.delete("/ideaApp/v1/ideas/:id", ideaController.deleteIdea);
  }