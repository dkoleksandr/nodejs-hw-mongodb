import { setupServer } from './src/server.js';
import { initMongoConnection } from './src/db/initMongoConnection.js';

async function bootstrap() {
  try {
    await initMongoConnection();
    await setupServer();
  } catch (error) {
    console.error(error);
  }
}

await bootstrap();
