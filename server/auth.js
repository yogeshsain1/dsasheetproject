const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { addUser, findUserByEmail, findUserById } = require('./db');

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error('JWT_SECRET is required');

const publicUser = (user) => ({ id: user.id, name: user.name, email: user.email });

const createToken = (user) => jwt.sign({ sub: user.id }, JWT_SECRET, { expiresIn: '7d' });

const registerUser = async ({ name, email, password }) => {
  const user = {
    id: crypto.randomUUID(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    passwordHash: await bcrypt.hash(password, 12),
    createdAt: new Date(),
  };
  try { addUser(user); } catch (error) {
    if (error.code === 11000) {
      const duplicate = new Error('An account with this email already exists');
      duplicate.status = 409;
      throw duplicate;
    }
    throw error;
  }
  return { user: publicUser(user), token: createToken(user) };
};

const loginUser = async ({ email, password }) => {
  const user = findUserByEmail(email.trim().toLowerCase());
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    const error = new Error('Invalid email or password');
    error.status = 401;
    throw error;
  }
  return { user: publicUser(user), token: createToken(user) };
};

const getUserById = async (id) => findUserById(id);

module.exports = { createToken, getUserById, loginUser, publicUser, registerUser };
