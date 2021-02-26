import { knexClient } from '../loaders/database/client';

import { settings } from '../settings';


const validateModule = moduleName => {
  if(!settings.INSTALLED_MODULES.includes(moduleName))
  {
    throw new Error(`${moduleName} is not available in current modules in src.`);
  }
}

const makemigrations = async (...options) => {
  const [moduleName, migrationName, ...extras] = options;
  validateModule(moduleName);
  knexClient.migrate.make(migrationName, {
    directory: `./src/${moduleName}/migrations/`
  });
}

const migrate = async (...options) => {
  const [moduleName, ...extras] = options;
  validateModule(moduleName);
  knexClient.migrate.latest({
    directory: `./src/${moduleName}/migrations/`,
    disableMigrationsListValidation: true,
  });
}

export const commands = {
  makemigrations,
  migrate
}
