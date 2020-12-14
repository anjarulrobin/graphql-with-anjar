const { printSchema } = require("graphql");
const { schema_resolver } = require("./schema-resolvers");

module.exports = {
  // graphql's printSchema function prints the graphQL schema in SDL format.
  print: () => printSchema(schema_resolver),
};
