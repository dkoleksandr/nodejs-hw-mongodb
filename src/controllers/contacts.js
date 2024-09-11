import {
  getAllContacts,
  getContactById,
  createContact,
} from '../services/contacts.js';
import createHttpError from 'http-errors';

export const getContactsController = async (req, res, next) => {
  const students = await getAllContacts();

  res.send({
    status: 200,
    message: 'Successfully found contacts!',
    data: students,
  });
};

export const getContactController = async (req, res, next) => {
  const { contactId } = req.params;

  const contact = await getContactById(contactId);

  if (contact === null) {
    throw createHttpError(404, 'Contact not found');
  }

  res.send({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};

export const createContactController = async (req, res) => {
  const contact = await createContact(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created a contact!`,
    data: contact,
  });
};
