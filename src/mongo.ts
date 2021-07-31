import mongoose from 'mongoose'
import { Keys, Credentials } from './models/Database'

const cred: Credentials = {
  user: 'mongoadmin',
  password: 'mongoadmin',
}

const keys: Keys = {
  URI: `mongodb://${cred.user}:${cred.password}@localhost:27017/MangaSword?authSource=admin&retryWrites=true`,
}

// mongodb
mongoose
  .connect(keys.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    auth: {
      user: cred.user,
      password: cred.password,
    },
  })
  .then(() => console.log('mongoDB is conected'))
  .catch((err) => console.error(err))
