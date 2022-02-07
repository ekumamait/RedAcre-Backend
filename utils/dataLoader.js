import { addLocation } from '../controllers';
import fs from "fs";

const populateDB = async () => {
  try {
    let obj = JSON.parse(fs.readFileSync("./lunch.geojson"))
    let coordinatesMapper = obj.features[0].geometry.coordinates;
    coordinatesMapper.forEach(element => {
      addLocation(element[0], element[1])
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default populateDB;