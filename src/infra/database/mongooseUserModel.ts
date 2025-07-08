import mongoose from "mongoose";
import { Schema } from "mongoose";

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedYear: { type: String, required: true },
    isBorrowed: { type: Boolean, required: true, default: false }
});

export const bookModel = mongoose.model('Book', bookSchema);