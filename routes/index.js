import express from "express";
import { getLocation, addLocation } from '../controllers';

// defining middleware routes
const router = express.Router();

router
  .route('/')
  .get(getLocation)
  .post(addLocation);

module.exports = router;