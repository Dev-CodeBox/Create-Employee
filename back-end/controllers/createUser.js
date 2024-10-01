const User = require("../models/user");

exports.createUser = async (request, response) => {
  try {
    console.log("req body", request.body);
    const { name, email, title, department, role } = request.body;
    if (!name || !email || !title || !role || !department) {
      console.log("not all fields...");
      return response.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }
    const user = await User.create({
      name,
      email,
      title,
      department,
      role,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`,
    });
    return response.status(200).json({
      status: 201,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.log("error", error);
    return response.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
