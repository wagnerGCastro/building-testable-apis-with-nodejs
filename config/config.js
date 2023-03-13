import * as dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const MONGODB_PORT = process.env.MONGODB_PORT;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME;

const config = {
  database: {
    mongoUrl: `mongodb://localhost:${MONGODB_PORT}/${MONGO_DB_NAME}`
  },
  auth: {
    key: "thisisaverysecurekey",
    tokenExpiresIn: "7d"
  }
}

export default config;






