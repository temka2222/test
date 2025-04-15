import { connectToDatabase } from "./database/connect-to-db";
import foodRouter from "./routes/food.route";
connectToDatabase();
const express = require("express");
const app = express();
const port = 3001;

app.use(foodRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
