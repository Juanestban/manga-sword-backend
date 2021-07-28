import mongoose, { Schema, model } from 'mongoose'

export interface User extends mongoose.Document {
  firstname: string
  lastname: string
  age: number
  email: string
}

const UserScheme = new Schema({
  firstname: String,
  lastname: String,
  age: Number,
  email: String,
})

export default model<User>('User', UserScheme)
