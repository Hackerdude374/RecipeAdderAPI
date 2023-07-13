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