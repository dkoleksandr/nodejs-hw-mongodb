import createHttpError from 'http-errors';
import { Contact } from '../models/contact.js';

export const checkOwnership = () => async (req, res, next) => {
  const { user } = req;
  if (!user) {
    next(createHttpError(401));
    return;
  }

  const { contactId } = req.params;

  const contact = await Contact.findById({
    _id: contactId,
  });

  if (!contact) {
    next(createHttpError(404));
    return;
  }

  if (contact && req.user._id.equals(contact.userId)) {
    next();
    return;
  }

  next(createHttpError(403));
};
