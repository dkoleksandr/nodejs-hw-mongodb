import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
    fs.readFile(PATH_DB, { encoding: 'utf-8' })
    .then((data) => JSON.parse(data))
    .then((contacts) => {
      console.log(contacts.length);
    })
    .catch((error) => console.error(error));
};

console.log(await countContacts());
