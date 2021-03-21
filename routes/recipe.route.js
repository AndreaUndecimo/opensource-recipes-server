const express = require("express");
const router = express.Router();
const {
  createRecipe,
  getAllRecipes,
  getSingleRecipe,
  deleteAll
} = require("../controllers/recipe.controller");

router.post("/new_recipe", createRecipe);

router.post("/single_recipe", getSingleRecipe);

router.get("/all_recipes", getAllRecipes);

router.delete("/delete_recipe", deleteAll)

module.exports = router;