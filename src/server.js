import express from 'express';
import pinoHTTP from 'pino-http';
import cors from 'cors';
import 'dotenv/config';
import contactsRouter from './routers/contacts.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

async function setupServer() {
  const app = express();

  app.use(express.json());
  app.use(cors());

  const pino = pinoHTTP({
    transport: {
      target: 'pino-pretty',
    },
  });

  app.use(pino);

    app.get('/', (req, res) => {
      res.send({ status: 200, message: 'Hello, World!' });
    });
  
  app.use(contactsRouter);

  app.use(notFoundHandler);

  app.use(errorHandler);

  const PORT = process.env.PORT || 3000;
  
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

export { setupServer };
