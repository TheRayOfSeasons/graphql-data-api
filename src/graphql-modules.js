import { importSchema } from 'graphql-import';

import { CollectionResolvers } from './collections/resolvers';
import { PersonResolvers } from './persons/resolvers';

export const modules = {
  resolvers: [
    CollectionResolvers,
    PersonResolvers,
  ],
  schemas: [
    importSchema('./src/collections/schema.graphql'),
    importSchema('./src/persons/schema.graphql'),
  ]
}
