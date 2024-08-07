import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  fs.readFile(PATH_DB, { encoding: 'utf-8' })
    .then((data) => JSON.parse(data))
    .then((contacts) => {
      let a = 0;
      while (a < number) {
        a += 1;
        contacts.push(createFakeContact());
      }

      fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2));
    })
    .catch((error) => console.error(error));
};

generateContacts(5);
