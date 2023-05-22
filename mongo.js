const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Assiya:qwerty123@cluster0.0wkhhs0.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((e) => {
    console.log("failed");
  });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  wins: {
    type: Number,
    required: true,
  },
  loses: {
    type: Number,
    required: true,
  },
  kills: {
    type: Number,
    required: true,
  },
  deaths: {
    type: Number,
    required: true,
  },
  assists: {
    type: Number,
    required: true,
  },
  headshots: {
    type: Number,
    required: true,
  },
});

const collection = mongoose.model("collection", userSchema);

module.exports = collection;
