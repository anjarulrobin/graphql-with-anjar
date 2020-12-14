const { parse, validate } = require("graphql");
const { schema_resolver } = require("./schema-resolvers");
const { queryString, mutationString } = require("./sampleStrings");

const validateQuery = () => {
  // parse string to generate AST
  const queryAst = parse(queryString);

  // check query validation with schema
  const errors = validate(schema_resolver, queryAst);

  if (errors.length === 0) {
    return "SUCCESS";
  } else {
    return `ERROR_EXECUTING_QUERY: ${JSON.stringify(errors)}`;
  }
};

const validateMutation = () => {
  const queryAst = parse(mutationString);
  const errors = validate(schema_resolver, queryAst);

  if (errors.length === 0) {
    return "SUCCESS";
  } else {
    return `ERROR_EXECUTING_MUTATION: ${JSON.stringify(errors)}`;
  }
};

module.exports = {
  validateQuery,
  validateMutation,
};
