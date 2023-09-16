const express = require("express");
const { DataModel } = require("../model/data.model");

const dataRouter = express.Router();

dataRouter.get("/all", async (req, res) => {
  
  try {
    let data = await DataModel.find();
    res.send(data);
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});
// this used because i want to send my data to my mongodb using postman
dataRouter.post("/send", async (req, res) => {
  //console.log("sdsd");
  try {
    const {
      end_year,
      intensity,
      sector,
      topic,
      insight,
      url,
      region,
      start_year,
      impact,
      added,
      published,
      country,
      relevance,
      pestle,
      source,
      title,
      likelihood,
    } = req.body;

    let data = await DataModel.create({
      end_year,
      intensity,
      sector,
      topic,
      insight,
      url,
      region,
      start_year,
      impact,
      added,
      published,
      country,
      relevance,
      pestle,
      source,
      title,
      likelihood,
    } );
    
    console.log(data);
    res.send(data);
    
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

module.exports = {
    dataRouter
}