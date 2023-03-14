import mongoose from 'mongoose';
import config from '../config/config';

console.log(config.database.mongoUrl);

const mongodbUrl = config.database.mongoUrl;

const connect = () =>
  mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

export default {
  connect,
  connection: mongoose.connection,
};
