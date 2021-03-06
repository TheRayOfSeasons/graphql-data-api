import { knexClient } from '../loaders/database/client';

import { settings } from '../settings';


const validateModule = moduleName => {
  if(!settings.INSTALLED_MODULES.includes(moduleName))
  {
    throw new Error(`${moduleName} is not available in current modules in src.`);
  }
}

const createModuleMigrationPath = module => `./src/${module}/migrations/`;

const makemigrations = async (...options) => {
  const [moduleName, migrationName, ...extras] = options;
  validateModule(moduleName);
  return knexClient.migrate.make(migrationName, {
    directory: `./src/${moduleName}/migrations/`
  });
}

const migrate = async (...options) => {
  const [moduleName, ...extras] = options;
  let directory;
  if(moduleName) {
    validateModule(moduleName);
    directory = createModuleMigrationPath(moduleName);
  }
  else {
    directory = settings.INSTALLED_MODULES.map(module => createModuleMigrationPath(module));
  }
  return knexClient.migrate.latest({
    directory,
    disableMigrationsListValidation: true,
  });
}

const up = async (...options) => {
  const [moduleName, ...extras] = options;
  const directory = settings.INSTALLED_MODULES.map(module => createModuleMigrationPath(module));
  const config = {
    directory,
    disableMigrationsListValidation: true,
  }
  if(moduleName)
    config.name = moduleName;
  return knexClient.migrate.up(config);
}

const down = async (...options) => {
  const [moduleName, ...extras] = options;
  const directory = settings.INSTALLED_MODULES.map(module => createModuleMigrationPath(module));
  const config = {
    directory,
    disableMigrationsListValidation: true,
  }
  if(moduleName)
    config.name = moduleName;
  return knexClient.migrate.down(config);
}

const rollback = async (...options) => {
  const directory = settings.INSTALLED_MODULES.map(module => createModuleMigrationPath(module));
  const config = {
    directory,
    disableMigrationsListValidation: true,
  };
  return knexClient.migrate.rollback(config);
}

export const commands = {
  makemigrations,
  migrate,
  up,
  down,
  rollback,
}
