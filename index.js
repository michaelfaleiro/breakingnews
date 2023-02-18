const express = require("express");
const userRoute = require("./src/routes/user.route.js");
const connectDataBase = require("./src/database/db.js");

const port = 3000;

const app = express();
connectDataBase();
app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
