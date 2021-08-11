import mongoose from 'mongoose'
import { Keys } from './models/Database'

// const cred: Credentials = {
//   user: 'mongoadmin',
//   password: 'mongoadmin',
// }
console.log(process.env.USER_NAME, process.env.PASSWORD)
const keys: Keys = {
  URI: `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@manga-sword-cluster01.7jzn1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
}

// mongodb
mongoose
  .connect(keys.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('mongoDB is conected'))
  .catch((err) => console.error(err))
