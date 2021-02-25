import { GraphQLHTTP } from './graphql/middleware';

export default {
  applyApp: async app => {
    app.use('/graphql', GraphQLHTTP);
  },
  applyServer: async server => {}
}
