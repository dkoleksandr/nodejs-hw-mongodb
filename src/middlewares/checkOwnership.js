import createHttpError from 'http-errors';
import { Contact } from '../models/contact.js';

export const checkOwnership = () => async (req, res, next) => {
  const { user } = req;
  if (!user) {
    next(createHttpError(401));
    return;
  }

  const { contactId } = req.params;

  const contact = await Contact.findOne({
    _id: contactId,
    userId: user._id,
  });

  if (contact) {
    next();
    return;
  }

  next(createHttpError(403));
};