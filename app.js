const express = require("express");
const app = express();
const { print } = require("./print");
const { executeMutation, executeQuery } = require("./execute");
const { validateMutation, validateQuery } = require("./validate");

// prints the schema written using graphql in SDL format
app.get("/print-schema", (req, res) => res.send(print()));

// returns the query strings validity result. where the query string is defined in sampleString.js
app.get("/validate/query", (req, res) => res.send(validateQuery()));

// returns the mutation strings validity. where the mutation string is defined in sampleString.js
app.get("/validate/mutation", (req, res) => res.send(validateMutation()));

// returns the query string execution result. where the query is defined in sampleString.js
app.get("/execute/query", (req, res) => res.send(executeQuery()));

// returns the mutation string execution result. where the mutation is defined in sampleString.js
app.get("/execute/mutation", (req, res) => res.send(executeMutation()));

const PORT = 3000;
app.listen(PORT, () => console.log("SERVER is running on port", PORT));
