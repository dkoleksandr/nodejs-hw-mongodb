import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  fs.readFile(PATH_DB, { encoding: 'utf-8' })
    .then((data) => JSON.parse(data))
    .then((contacts) => {
      const newContact = createFakeContact();
      const newContactsList = [...contacts, newContact];
      fs.writeFile(PATH_DB, JSON.stringify(newContactsList, undefined, 2));
    })
    .catch((error) => console.error(error));
};

addOneContact();
