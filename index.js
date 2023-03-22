// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const { ApolloServer, gql } = require('apollo-server');


// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Card" type defines the queryable fields.
  type Card {
    front: String
    back: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "cards" query returns an array of zero or more Cards (defined above).
  type Query {
    cards: [Card]
  }
`;

// cardsDatabase
const cards = []

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves cards from the "cards" array above.
const resolvers = {
    Query: {
      cards: () => cards,
    },
  };


const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});