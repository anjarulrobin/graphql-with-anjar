const queryString = `
  query {
      user(id: 1) {
      id
      name
      age
      }
    }
`;

const mutationString = `
  mutation{
    createUser(newUser:{ id: 4 name: "Test" age: 30 }) {
      id
      name
      age
    }
  }
`;

module.exports = {
  queryString,
  mutationString,
};
