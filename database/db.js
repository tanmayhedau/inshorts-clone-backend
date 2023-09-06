import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb database is connected successfully ${mongoose.connection.host}`)
  } catch (error) {
    console.log(`MongoDb error`, error)
  }
}

export default connectDB;