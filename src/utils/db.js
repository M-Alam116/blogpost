import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://M_Alam:NwZCrwKFNkSE06z6@cluster0.dg8uvws.mongodb.net/blogpost?retryWrites=true&w=majority"
    );
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
