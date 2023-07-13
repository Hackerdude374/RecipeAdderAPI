const {RecipeApplication} = require('./models');

//create new recipe

application.post("/recipes", async(req,res)=>{
try{
    const newRecipe = await RecipeApplication.create(req.body);
    
}
});