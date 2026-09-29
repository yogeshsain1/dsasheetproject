const router = require('express').Router();
const { loginUser, registerUser } = require('../auth');
const requireAuth = require('../middleware/auth');

const validCredentials = ({ name, email, password }, needsName) => {
  if (needsName && (!name || name.trim().length < 2)) return 'Name must contain at least 2 characters';
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) return 'Enter a valid email address';
  if (!password || password.length < 8) return 'Password must contain at least 8 characters';
  return null;
};

router.post('/register', async (req, res) => {
  const error = validCredentials(req.body, true);
  if (error) return res.status(400).json({ error });
  try {
    res.status(201).json(await registerUser(req.body));
  } catch (err) {
    res.status(err.status || 500).json({ error: err.status ? err.message : 'Unable to create account' });
  }
});

router.post('/login', async (req, res) => {
  const error = validCredentials(req.body, false);
  if (error) return res.status(400).json({ error });
  try {
    res.json(await loginUser(req.body));
  } catch (err) {
    res.status(err.status || 500).json({ error: err.status ? err.message : 'Unable to sign in' });
  }
});

router.get('/me', requireAuth, (req, res) => res.json({ user: req.user }));

module.exports = router;
