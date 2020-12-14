const users = [
  {
    id: 1,
    name: "Asad",
    age: 20,
  },
  {
    id: 2,
    name: "Rupok",
    age: 24,
  },
  {
    id: 3,
    name: "Rakib",
    age: 30,
  },
];

const getUserById = (id) => {
  return id < users.length ? users[id] : null;
};

const addUser = (newUser) => {
  users.push(newUser);
  return users[users.length - 1];
};

module.exports = {
  getUserById,
  addUser,
};
