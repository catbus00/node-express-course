const jwt = require('jsonwebtoken');

const middleware = async (req, res, next) => {
  const authHeader = req.header('Authorization');
  console.log(authHeader);
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('No token provided');
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET_VALUE);
    console.log(decoded);
    const { name } = decoded;
    req.user = { name };
    next();
  } catch (error) {
    res.status(401).json({ msg: 'unauthorized' });
  }
};

module.exports = middleware;
