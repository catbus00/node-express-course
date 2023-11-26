const jwt = require('jsonwebtoken');

const logon = async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    throw new Error('Please provide name and password');
  }
  const token = jwt.sign({ name }, process.env.SECRET_VALUE, {
    expiresIn: '24hr',
  });

  res.status(200).json({ token });
};

const hello = (req, res) => {
  const { name } = req.user;
  res.status(200).json({ message: `Welcome ${name}!` });
};

module.exports = { logon, hello };
