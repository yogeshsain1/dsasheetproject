const path = require('path');
const fs = require('fs-extra');

const dataPath = path.join(__dirname, 'data');
const usersPath = path.join(dataPath, 'users.json');
const progressPath = path.join(dataPath, 'progress');

const readJson = (filePath, fallback) => {
  if (!fs.existsSync(filePath)) return fallback;
  return fs.readJsonSync(filePath);
};

const writeJson = (filePath, value) => {
  fs.ensureDirSync(path.dirname(filePath));
  fs.writeJsonSync(filePath, value, { spaces: 2 });
};

const readUsers = () => readJson(usersPath, []).map(user => ({ ...user, id: user.id || user._id }));
const writeUsers = users => writeJson(usersPath, users);
const userFile = id => path.join(progressPath, `${id}.json`);

const connectDatabase = async () => {
  fs.ensureDirSync(progressPath);
  return true;
};

const findUserById = id => readUsers().find(user => user.id === id) || null;
const findUserByEmail = email => readUsers().find(user => user.email === email) || null;

const addUser = user => {
  const users = readUsers();
  if (users.some(existing => existing.email === user.email)) {
    const error = new Error('Duplicate email');
    error.code = 11000;
    throw error;
  }
  users.push(user);
  writeUsers(users);
};

const readProgress = userId => readJson(userFile(userId), {
  solved: {}, lmSolved: {}, activityLog: {}, notes: {}, starred: {}, srs: {},
});

const writeProgress = (userId, data) => writeJson(userFile(userId), data);

const closeDatabase = async () => {};
module.exports = { addUser, closeDatabase, connectDatabase, findUserByEmail, findUserById, readProgress, writeProgress };
