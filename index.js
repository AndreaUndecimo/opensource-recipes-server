const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const recipeRouter = require("./routes/recipe.route");
const imageRouter = require("./routes/image.route");
const app = express();

dotenv.config();

const PORT = process.env.PORT || 3800;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/recipe", recipeRouter);
app.use("/cloudinary", imageRouter);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
