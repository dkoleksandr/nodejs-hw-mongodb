import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  fs.readFile(PATH_DB, { encoding: 'utf-8' })
    .then((data) => JSON.parse(data))
    .then((contacts) => {
      const newContactsList = contacts.slice(0, -1);
      fs.writeFile(PATH_DB, JSON.stringify(newContactsList, undefined, 2));
    })
    .catch((error) => console.error(error));
};

removeLastContact();
