const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const Participant = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    gender: { type: GraphQLString },
    age: { type: GraphQLInt },
    yards: { type: GraphQLInt },
    status: { type: GraphQLString },
  }),
});

module.exports = Participant;
