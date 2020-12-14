Description:

My aim is to learn the request/response cycle of graphQL.

What happens behind the graphql API? My findings.

- Graphql

1. Takes a query string in SDL format
2. Parses the query string to build an AST (Abstract Syntax Tree)
3. Validate the query (AST) against graph-API's schema and resolver
4. Executes the query (AST) against graph-API's schema and resolver
5. Sends response back to caller.

The fun part is that we can manually execute these steps without any UI/client-app. Let's see

GraphQL provides these functions to execute the steps.

1. 'parse' function to parse a string into an AST. so we can use that function to convert a string to AST
2. 'validate' function which basically takes the API schema and the generated AST to validate.
3. 'execute' function which takes the same input as 'validate' function. This result is sent back to the caller.

More interestingly you can print the whole schema using 'printSchema' function.
