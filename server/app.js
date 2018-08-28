const express = require("express");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const mongoose = require("mongoose");
const schema = require("./schema/schema");

const PORT = 4000;

const app = express();

mongoose.connect(
  "mongodb://ankush:bvcoe1@ds235352.mlab.com:35352/bvcoeassignment",
  { useNewUrlParser: true }
);
mongoose.connection.once("open", () => {
  console.log("Connected to database");
});

schema.applyMiddleware({ app });

app.listen(PORT, () =>
  console.log(`GraphiQL is running on http://localhost:${PORT}/graphql`)
);
