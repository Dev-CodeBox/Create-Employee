const User = require("../models/user");
exports.getUser = async (request, response) => {
  try {
    const userData = await User.find({});
    response.json({ success: true, data: userData });
  } catch (error) {
    response.status(500).json({ success: false, error: error });
  }
};
