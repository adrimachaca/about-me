import express from "express";
import "dotenv/config"; // import dotenv

const app = express();
const PORT = process.env.PORT;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
