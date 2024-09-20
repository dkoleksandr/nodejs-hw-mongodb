import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Contact should be a string',
    'string.min': 'Contact should have at least {#limit} characters',
    'string.max': 'Contact should have at most {#limit} characters',
    'any.required': 'Contact is required',
  }),
  phoneNumber: Joi.string().min(3).max(20).required(),
  email: Joi.string().email(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal').required(),
  userId: Joi.string().required(),
});


export const updateContactSchema = Joi.object({
    name: Joi.string().min(3).max(20).messages({
      'string.base': 'Contact should be a string',
      'string.min': 'Contact should have at least {#limit} characters',
      'string.max': 'Contact should have at most {#limit} characters',
    }),
    phoneNumber: Joi.string().min(3).max(16),
    email: Joi.string().email(),
    isFavourite: Joi.boolean(),
    contactType: Joi.string().valid('work', 'home', 'personal'),
  });