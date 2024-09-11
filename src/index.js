import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

async function bootstrap() {
  try {
    await initMongoConnection();
    await setupServer();
  } catch (error) {
    console.error(error);
  }
}

await bootstrap();
