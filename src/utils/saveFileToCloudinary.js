import cloudinary from 'cloudinary';
import fs from 'node:fs/promises';

import { env } from './env.js';
import { ENV_VARS } from '../constants/index.js';

cloudinary.v2.config({
  secure: true,
  cloud_name: env(ENV_VARS.CLOUDINARY_CLOUND_NAME),
  api_key: env(ENV_VARS.CLOUDINARY_API_KEY),
  api_secret: env(ENV_VARS.CLOUDINARY_API_SECRET),
});

export const saveFileToCloudinary = async (file) => {
  const response = await cloudinary.v2.uploader.upload(file.path);
  await fs.unlink(file.path);
  return response.secure_url;
};
