import express from "express";
const { getStores, addStore } = require('../controllers');

// defining middleware routes
const router = express.Router();

router
  .route('/')
  .get(getStores)
  .post(addStore);

module.exports = router;