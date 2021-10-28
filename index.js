const express = require("express");
const cors = require("cors");
//const request = require("request");
const app = express();
const PORT = 6969;
const schema = require("./Schemas");
const { graphqlHTTP } = require("express-graphql");

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Your Server is running on localhost:${PORT}/graphql`);
});
