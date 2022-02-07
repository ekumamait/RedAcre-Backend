import Map from '../models';

// @desc  Get all location coordinates
// @route GET /api/v1/location
// @access Public
exports.getLocation = async (req, res, next) => {
  try {
    const location = await Map.find();
    return res.status(200).json({
      success: true,
      count: location.length,
      data: location
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc  Add location files
// @access Invisible
exports.addLocation = async (lng, lat) => {
  try {
    const map = await Map.create({lng, lat});
    console.log('<<<>>>',map);
  } catch (err) {
  }
};