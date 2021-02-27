import dotenv from 'dotenv';

dotenv.config();

export const settings = {
  INSTALLED_MODULES: [
    'collections',
    'persons'
  ],
  DATABASE: {
    client: process.env.DATABASE_ENGINE || 'postgres',
    connection: {
      host: process.env.DATABASE_HOST || 'localhost',
      user: process.env.DATABASE_USER || 'root',
      password: process.env.DATABASE_PASSWORD || '',
      database: process.env.DATABASE_NAME || 'myDatabase',
    }
  }
}
