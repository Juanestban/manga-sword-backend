import mongoose from 'mongoose'

export interface Roles extends mongoose.Document {
  id: any
  name: 'ADMIN' | 'EDITOR' | 'LIMPIADOR' | 'SEGUIDOR' | 'LECTOR'
}
