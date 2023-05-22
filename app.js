const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
// const hbs = require("hbs")
const collection = require("./mongo");
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exists");
    } else {
      res.json("not exists");
    }
  } catch (error) {
    console.log(error);
    res.json("not exists");
  }
});

app.post("/signup", async (req, res) => {
  const {
    name,
    email,
    password,
    wins,
    loses,
    kills,
    deaths,
    assists,
    headshots,
  } = req.body;

  const data = {
    name,
    email,
    password,
    wins,
    loses,
    kills,
    deaths,
    assists,
    headshots,
  };
  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exists");
    } else {
      res.json("not exists");
      await collection.insertMany([data]);
    }
  } catch (error) {
    res.json("not exists");
  }
});

app.get("/home", async (req, res) => {
  try {
    const allUser = await collection.find({});
    res.send({ status: "ok", data: allUser });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log("port connected");
});
