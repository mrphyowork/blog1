// public
const userRegister = async (req, res) => {
  res.json({ message: "Register the user" });
};

// public
const userLogin = async (req, res) => {
  res.json({ message: "Login the user" });
};

// private
const userProfile = async (req, res) => {
  res.json({ message: "Current user info" });
};

module.exports = { userRegister, userLogin, userProfile };
