// import express module
const express = require("express");
// import mongoose module
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Connect APP to DB and create ninja DB
mongoose.connect("mongodb://localhost:27017/ninja", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Match = require("./models/match");
const Team = require("./models/team");
const User = require("./models/user");
// Create Express Application
const app = express();
// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

// import body parser module
const bodyParser = require("body-parser");
// Prepare Response to JSON Object
app.use(bodyParser.json());
// Parse getted Body from FE to JSON Object
app.use(bodyParser.urlencoded({ extended: true }));
// / => http://localhost:3000/
// T1: Return all matches
app.get("/matches", (req, res) => {
  console.log("Here in get all matches");
  Match.find((err, docs) => {
    if (err) {
      console.log("Problem with DB");
    } else {
      // 200 : status code with success
      // 404 : Not Found
      res.status(200).json({
        message: "Here all objects",
        matches: docs,
      });
    }
  });
});
// T2: Add match to DB
app.post("/addMatch", (req, res) => {
  console.log("Here in Add Match", req.body);
  const match = new Match({
    teamOne: req.body.teamOne,
    teamTwo: req.body.teamTwo,
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo,
  });
  match.save();
});
// T3: Get Match By ID
app.get("/getMatch/:id", (req, res) => {
  console.log("Here in get Match By ID", req.params.id);
  // search match by _id (attribute into object) where _id = req.params.id (606f3c882c5f7bda77183939)
  Match.findOne({ _id: req.params.id }).then((result) => {
    console.log("Here result", result);
    res.status(200).json({
      findedMatch: result,
    });
  });
});
// {attr1: val1, attr2:val2,....}
// T4: Delete Match By ID
app.delete("/deleteById/:id", (req, res) => {
  // delete from matches object where its _id = req.params.id
  Match.deleteOne({ _id: req.params.id }).then((result) => {
    console.log("Here result after delete", result);
    if (result) {
      res.status(200).json({
        message: "Match deleted with success",
      });
    }
  });
});

//T5: Update Match By ID
app.put("/updateMatch/:id", (req, res) => {
  console.log("Here in update Match By ID", req.params.id);
  console.log("Here object", req.body);
  // new instance
  const match = new Match({
    _id: req.body._id,
    teamOne: req.body.teamOne,
    teamTwo: req.body.teamTwo,
    scoreOne: req.body.scoreOne,
    scoreTwo: req.body.scoreTwo,
  });
  // save instance
  Match.updateOne({ _id: req.params.id }, match).then((result) => {
    res.status(200).json({
      message: "Updated with success",
    });
  });
});

// / : => http://localhost:3000/teams/addTeam
app.post("/addTeam", (req, res) => {
  console.log("here in add Team", req.body);
  const team = new Team({
    name: req.body.name,
    foundation: req.body.foundation,
    stadium: req.body.stadium,
    country: req.body.country,
  });
  team.save();
});

app.post("/searchMatch", (req, res) => {
  console.log("Here team one value", req.body.team);
  Match.find({ teamOne: req.body.team }).then((result) => {
    res.status(200).json({
      searchedMatches: result,
    });
  });
});

app.post("/signup", (req, res) => {
  bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
    console.log("Here into signup", req.body);
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      pwd: cryptedPwd,
      role:req.body.role
    });
    user.save((err, result) => {
      console.log("Error", err);
      if (err) {
        res.status(200).json({
          message: "0"
        });
      } 
      if (result) {
        res.status(200).json({
          message: "1"
        });
      }

    });
  });
});

app.post("/login", (req, res) => {
  console.log("here into login", req.body);
  User.findOne({ email: req.body.email })
    .then((findedUser) => {
      if (!findedUser) {
        res.status(200).json({
          message: "0",
        });
      }
      return bcrypt.compare(req.body.pwd, findedUser.pwd);
    })
    .then((correctUserPwd) => {
      console.log("correctUserPwd", correctUserPwd);
      if (!correctUserPwd) {
        res.status(200).json({
          message: "1",
        });
      }
      User.findOne({ email: req.body.email }).then((finalUser) => {
        let user = {
          id: finalUser._id,
          firstName: finalUser.firstName,
          lastName: finalUser.lastName,
          role:finalUser.role
        };
        res.status(200).json({
          user: user,
          message: "2"
        });
      });
    });
});


// App is exportable
module.exports = app;
