//Imports
import express from "express";
import "dotenv/config"; // import dotenv
import { dirname } from "path";
import { fileURLToPath } from "url";

//Variables
const app = express();
const PORT = process.env.PORT;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
