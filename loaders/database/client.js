import knex from 'knex';

import { settings } from '../../settings';

const knexClient = knex(settings.DATABASE);

export { knexClient };
