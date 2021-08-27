const express = require("express");
const router = new express.Router();
const MenRanking = require("../model/mens");
router.post("/", async (req, res) => {
  try {
    const data = new MenRanking(req.body);
    data
      .save()
      .then(() => {
        console.log("stored");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
});
router.get("/mens", async (req, res) => {
  try {
    const data = await MenRanking.find();
    res.status(201).send(data);
  } catch (e) {
    res.status(400).send(e);
  }
});
router.get("/mens/:id", async (req, res) => {
  try {
    const data = await MenRanking.findById(req.params.id);
    res.send(data);
  } catch (e) {
    res.status(400).send(e);
  }
});
router.patch("/mens/:id", async (req, res) => {
  try {
    const data = await MenRanking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.send(data);
  } catch (e) {
    res.status(400).send(e);
  }
});
router.delete("/mens/:id", async (req, res) => {
  try {
    const data = await MenRanking.findByIdAndDelete(req.params.id);
    res.send(data);
  } catch (e) {
    res.status(400).send(e);
  }
});
module.exports=router
