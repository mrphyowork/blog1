const User = require("../modles/userModel");
const bcrypt = require("bcryptjs");

// public
const userRegister = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(400).json({ message: "User already registered!" });
  }

  // encrypt
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  const user = await User.create({ username, email, password: hashedPassword });
  if (!user) {
    return res.status(400).json({ message: "User data is not valid!" });
  }
  return res.status(201).json({ _id: user.id, email: user.email });
};

// public
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }
  const user = await User.findOne({ email });
  if (user && bcrypt.compare(password, user.password)) {
    return res.status(200).json(user);
  } else {
    return res.status(404).json({ message: "email or password incorrect!" });
  }
};

// private
const userProfile = async (req, res) => {
  res.json({ message: "Current user info" });
};

module.exports = { userRegister, userLogin, userProfile };
