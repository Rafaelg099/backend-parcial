let users = [
  { id: 1, name: "Rafael" },
  { id: 2, name: "Andrea" },
];

// Obtener usuarios
const getUsers = (req, res) => {
  res.json(users);
};

// Crear usuario
const createUser = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "El nombre es obligatorio" });
  }

  const newUser = { id: users.length + 1, name };
  users.push(newUser);

  res.status(201).json(newUser);
};

module.exports = { getUsers, createUser };
