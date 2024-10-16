import path from 'node:path';

export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

export const FIFTEEN_MINUTES = 15 * 60 * 1000;
export const ONE_DAY = 24 * 60 * 60 * 1000;

export const SMTP = {
  SMTP_HOST: 'SMTP_HOST',
  SMTP_PORT: 'SMTP_PORT',
  SMTP_USER: 'SMTP_USER',
  SMTP_PASSWORD: 'SMTP_PASSWORD',
  SMTP_FROM: 'SMTP_FROM',
};

export const ENV_VARS = {
  JWT_SECRET: 'JWT_SECRET',
  APP_DOMAIN: 'APP_DOMAIN',
  // BACKEND_DOMAIN: 'BACKEND_DOMAIN',
  // CLOUDINARY_API_KEY: 'CLOUDINARY_API_KEY',
  // CLOUDINARY_API_SECRET: 'CLOUDINARY_API_SECRET',
  // CLOUDINARY_CLOUND_NAME: 'CLOUDINARY_CLOUND_NAME',
  // IS_CLOUDINARY_ENABLED: 'IS_CLOUDINARY_ENABLED',
};

export const TEMPLATES_DIR = path.join(process.cwd(), 'src', 'templates');