import mongoose, { Schema, model } from 'mongoose'

export interface TestTable extends mongoose.Document {
  name: string
  age: number
  anotherData: string
}

const TestTableScheme = new Schema({
  name: String,
  age: Number,
  anotherData: Boolean,
})

export default model<TestTable>('TestTable', TestTableScheme)
