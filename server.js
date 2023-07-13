const {RecipeApplication} = require('./models');

//create new recipe

app.post("/recipes", async(req,res)=>{
try{
    const newRecipe = await RecipeApplication.create(req.body);
    res.status(201).json(newRecipe);
}catch(err){
    console.error(err);
    res.status(500).send({message: err.message});
}
});

//get all recipes 
app.get("/recipes", async (req,res) =>{
    try{
const allRecipes = await RecipeApplication.findAll();
res.status(200).json(allRecipes);
    }catch(err){
        console.error(err);
        res.status(500).send({message: err.message});
    }
});

//get specigic recipe

app.get("/recipes/:id", async (req,res)=>{
const recipeId = parseInt(req.params.id, 10);
try{
    const recipe = await RecipeApplication.findOne({where: {id: recipeId}});

if(recipe){
    res.status(200).json(recipe);
}else{
    res.status(404).send({message: "recipe not found"});
}
}catch(err){
    console.error(err);
    res.status(500).send({message: err.message});
}

});

//update a specific recipe
app.patch("/recipes/:id", async (req, res) => {
    const recipeId = parseInt(req.params.id, 10);
  
    try {
      const [numberOfAffectedRows, affectedRows] = await RecipeApplication.update(req.body, { where: { id:
         recipeId }, returning: true });
  
      if (numberOfAffectedRows > 0) {
        res.status(200).json(affectedRows[0]);
      } else {
        res.status(404).send({ message: "recipe not found" });
      }
    } catch (err) {
      res.status(500).send({ message: err.message });
      console.error(err);
    }
  });


  //delete a specific recipe\
  app.delete("/recipes/:id", async (req, res) => {
    const recipeId = parseInt(req.params.id, 10);
    try {
      const deleteOp = await RecipeApplication.destroy({ where: { id: recipeId } });
      if (deleteOp > 0) {
        res.status(200).send({ message: "recipe deleted successfully" });
      } else {
        res.status(404).send({ message: "recipe not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  });

  