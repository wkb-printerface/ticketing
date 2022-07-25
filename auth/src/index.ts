import mongoose from "mongoose";

import { app } from "./app";

const start = async () => {
  console.log('Starting up.....')

  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }
  if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI must be defined')
  }

  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("connected to mongodb");
  } catch (err) {
    console.log(err);
  }

  app.listen(3000, () => {
    console.log("Listening 3000");
  });
};

start();
