import mongoose from "mongoose";

const connectDataBase = () => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(
      "mongodb+srv://michaelfaleiro:120588xd@cluster0.aaiwwsj.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
};

export default connectDataBase;
