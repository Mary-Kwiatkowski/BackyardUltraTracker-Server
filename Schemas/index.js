const Participant = require("./TypeDefs/Participant");

const userData = require("../byudata.json");
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
} = graphql;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(Participant),
      args: { age: { type: GraphQLInt } },
      resolve(parent, args) {
        return userData;
      },
    },
  },
});
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: Participant,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        gender: { type: GraphQLString },
        age: { type: GraphQLInt },
        yards: { type: GraphQLInt },
        status: { type: GraphQLString },
      },
      resolve(parent, args) {
        userData.push({
          id: userData.length + 1,
          firstName: args.firstName,
          lastName: args.lastName,
          gender: args.gender,
          age: args.age,
          yards: args.yards,
          status: args.status,
        });
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
