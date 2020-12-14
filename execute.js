const { parse, validate, execute } = require("graphql");
const { schema_resolver } = require("./schema-resolvers");
const { queryString, mutationString } = require("./sampleStrings");

const executeQuery = () => {
  const queryAst = parse(queryString);
  const errors = validate(schema_resolver, queryAst);

  if (errors.length === 0) {
    // if no error in validation then execute the query
    const result = execute(schema_resolver, queryAst);
    return result;
  } else {
    return `ERROR_EXECUTING_QUERY: ${JSON.stringify(errors)}`;
  }
};

const executeMutation = () => {
  const queryAst = parse(mutationString);
  const errors = validate(schema_resolver, queryAst);

  if (errors.length === 0) {
    const result = execute(schema_resolver, queryAst);
    return result;
  } else {
    return `FAILED_EXECUTING_MUTATION: ${JSON.stringify(errors)}`;
  }
};

module.exports = {
  executeQuery,
  executeMutation,
};
