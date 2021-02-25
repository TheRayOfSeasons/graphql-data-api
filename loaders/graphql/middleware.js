import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import { mergeStrings } from 'gql-merge'

import { modules } from '../../graphql-modules';

const schema = buildSchema(mergeStrings(modules.schemas));
const resolvers = modules.resolvers.reduce((accumulator, resolver) => {
  return {...accumulator, ...resolver};
}, {});

export const GraphQLHTTP = graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
});
