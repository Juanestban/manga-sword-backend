import { Schema, model, Document } from 'mongoose'

export interface Reader extends Document {
  imgProfile: string
  imgCoverPage: string
  firstName: string
  lastName: string
  nickName: string
  email: string
  password: string
}

const ReaderScheme = new Schema({
  imgProfile: String,
  imgCoverPage: String,
  firstName: String,
  lastName: String,
  nickName: String,
  email: String,
  password: String,
})

ReaderScheme.set('toJSON', {
  transform: (document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  },
})

export const ReaderModel = model('Readers', ReaderScheme)
