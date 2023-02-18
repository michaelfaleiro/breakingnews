import express from "express";
import connectDataBase from "./src/database/db.js";
import userRoute from "./src/routes/user.route.js";

const port = 3000;

const app = express();
connectDataBase();
app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
