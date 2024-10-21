import express from 'express';
import pinoHTTP from 'pino-http';
import cors from 'cors';
import 'dotenv/config';
import router from './routers/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import cookieParser from 'cookie-parser';
import { UPLOAD_DIR } from './constants/index.js';
import { swaggerDocs } from './middlewares/swaggerDocs.js';

async function setupServer() {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());

  const pino = pinoHTTP({
    transport: {
      target: 'pino-pretty',
    },
  });

  app.use(pino);

  app.get('/', (req, res) => {
    res.send({ status: 200, message: 'Hello, World!' });
  });

  app.use('/uploads', express.static(UPLOAD_DIR));
  app.use('/api-docs', swaggerDocs());

  app.use(router);

  app.use(notFoundHandler);

  app.use(errorHandler);

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

export { setupServer };
