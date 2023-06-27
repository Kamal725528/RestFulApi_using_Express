const ideas=require("../Model/idea.model");

//search ideas

exports.fetchAllIdeas= (req, res)=>{
    res.status(200).send(ideas);
}

let ideaId=1;
//create ideas
exports.createIdea=(req, res)=>{ 
    //request body
     const idea=req.body;
    //id include auto
     idea.id=++ideaId;
    //add id to req body
   ideas[ideaId]=idea;
    //return response
    res.status(201).send(ideas[ideaId]);
}


//update ideas
exports.updateIdea=(req,res)=>{
   // need to read id passes in path
   const Id=req.params.id;    // read the parameter
   //if idea is present the update else error 
    if(ideas[Id]){
        ideas[Id]=req.body;
        res.status(200).send(ideas[Id]);
    }
    else{
       res.status(400).send({
        message: "idea Id passed was not correct" }) 
    }
}

//delete ideas
exports.deleteIdea=(req,res)=>{
    if(ideas[req.params.id]){
        delete ideas[req.params.id];
        res.status(200).send({
            message:"successfully deleted"
        })
    }
    else{
        res.status(400).send({message:"id passed was not correct"})
    }
}