import express from 'express';
import pinoHTTP from 'pino-http';
import cors from 'cors';
import 'dotenv/config';
import { getAllContacts, getContactById } from './services/contacts.js';

async function setupServer() {
  const app = express();

  app.use(cors());

  const pino = pinoHTTP({
    transport: {
      target: 'pino-pretty',
    },
  });

  app.use(pino);

  //   app.get('/', (req, res) => {
  //     res.send({ status: 200, message: 'Hello, World!' });
  //   });

  app.get('/contacts', async (req, res) => {
    try {
      const students = await getAllContacts();

      res.send({
        status: 200,
        message: 'Successfully found contacts!',
        data: students,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Internal Server Error' });
    }
  });

  app.get('/contacts/:contactId', async (req, res) => {
    try {
      const { contactId } = req.params;

      const contact = await getContactById(contactId);

      if (contact === null) {
        return res
          .status(404)
          .send({ status: 404, message: 'Contact not found' });
      }

      res.send({
        status: 200,
        message: `Successfully found contact with id ${contactId}!`,
        data: contact,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Internal Server Error' });
    }
  });

  app.use((req, res, next) => {
    res.status(404).send({ status: 404, message: 'Not found' });
  });

  app.use((error, req, res, next) => {
    console.error(error);

    res.status(500).send({ status: 500, message: 'Internal Server Error' });
  });

  const PORT = process.env.PORT || 3000;
  
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

export { setupServer };
