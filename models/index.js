import mongoose from 'mongoose';

const MapSchema = new mongoose.Schema({
  lng: {
    type: String,
    required: [true, 'Please add a longitude']
  },
  lat: {
    type: String,
    required: [true, 'Please add a latitude']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Map', MapSchema);