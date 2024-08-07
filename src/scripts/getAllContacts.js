import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
  fs.readFile(PATH_DB, { encoding: 'utf-8' })
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

console.log(await getAllContacts());
