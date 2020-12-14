const {
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInputObjectType,
} = require("graphql");

// mock db
const { getUserById, addUser } = require("./userModel");

// graphql schema with resolvers. In graphql it is expected that each
// input/output field will have a resolve function
const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      resolve: (root, args, ctx, info) => {
        return getUserById(args.id);
      },
    },
  },
});

const UserInputType = new GraphQLInputObjectType({
  name: "UserInputType",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: { newUser: { type: UserInputType } },
      resolve: (root, args, ctx, info) => {
        return addUser(args.newUser);
      },
    },
  },
});

const schemaWithResolver = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

module.exports = {
  schema_resolver: schemaWithResolver,
};
