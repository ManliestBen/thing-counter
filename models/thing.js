import { text } from "express"
import mongoose from "mongoose"

const Schema = mongoose.Schema

const thingSchema = new Schema({
  thing: String,
  color: String,
  quantity: Number
}, {
  timestamps: true
})

const Thing = mongoose.model('Thing', thingSchema)

export {
  Thing
}