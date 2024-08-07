import mongoose from 'mongoose';

async function initMongoConnection() {
  try {
    await mongoose.connect(process.env.MONGODB_DB);
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { initMongoConnection };
