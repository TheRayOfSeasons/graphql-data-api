import dotenv from 'dotenv';
import Express from 'express';

import loader from './loaders';

dotenv.config();

const PORT = process.env.PORT || 1337;

const startServer = async () => {
  const app = Express();
  await loader.applyApp(app);
  const server = app.listen(PORT, () => console.log(`API Started at ${PORT}`));
  await loader.applyServer(server);
}

startServer();
