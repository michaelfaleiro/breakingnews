import mongoose from "mongoose";

const connectDataBase = () => {
  mongoose.set("strictQuery", true);
  console.log("Connecting to the database...");

  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
};

export default connectDataBase;
