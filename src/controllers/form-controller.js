const { User } = require("../models");

exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findAll();
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    User.create(req.body);
    res.status(200).json({ message: "Create success" });
  } catch (error) {
    next(error);
  }
};
