import express from "express";
import connectDataBase from "./src/database/db.js";
import dotenv from "dotenv";

import userRoute from "./src/routes/user.route.js";
import authRoute from "./src/routes/auth.route.js";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

connectDataBase();
app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
