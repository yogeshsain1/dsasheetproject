const jwt = require('jsonwebtoken');
const { getUserById, publicUser } = require('../auth');

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Authentication required' });

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const user = await getUserById(payload.sub);
    if (!user) return res.status(401).json({ error: 'User account not found' });
    req.user = publicUser(user);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};
