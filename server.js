const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

const DATA_FILE = './data.json';

// Helper: Load users from file
function loadUsers() {
  const data = fs.readFileSync(DATA_FILE);
  return JSON.parse(data);
}

// Helper: Save users to file
function saveUsers(users) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
}

// GET all users
app.get('/users', (req, res) => {
  const users = loadUsers();
  res.json(users);
});

// GET user by ID
app.get('/users/:id', (req, res) => {
  const users = loadUsers();
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found.");
  res.json(user);
});

// POST create new user
app.post('/users', (req, res) => {
  const users = loadUsers();
  const { name, email } = req.body;
  const newUser = {
    id: users.length ? Math.max(...users.map(u => u.id)) + 1 : 1,
    name,
    email
  };
  users.push(newUser);
  saveUsers(users);
  res.status(201).json(newUser);
});

// PUT update user
app.put('/users/:id', (req, res) => {
  const users = loadUsers();
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found.");

  const { name, email } = req.body;
  if (name) user.name = name;
  if (email) user.email = email;

  saveUsers(users);
  res.json(user);
});

// DELETE user
app.delete('/users/:id', (req, res) => {
  let users = loadUsers();
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send("User not found.");

  const deletedUser = users.splice(index, 1);
  saveUsers(users);
  res.json(deletedUser[0]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
