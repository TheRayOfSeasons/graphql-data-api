import { Model } from 'objection';

import { GraphQLHTTP } from './graphql/middleware';
import { knexClient} from './database/client';

export default {
  applyApp: async app => {
    app.use('/graphql', GraphQLHTTP);
    Model.knex(knexClient);
  },
  applyServer: async server => {}
}
