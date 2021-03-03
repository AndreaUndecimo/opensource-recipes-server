const express = require("express");
const router = express.Router();
const {
  createRecipe,
  getAllRecipes,
  getSingleRecipe,
  deleteRecipe
} = require("../controllers/recipe.controller");

router.post("/new_recipe", createRecipe);

router.post("/single_recipe", getSingleRecipe);

router.get("/all_recipes", getAllRecipes);

router.delete("/delete_recipe", deleteRecipe)

module.exports = router;
