import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    Name: String,
    Data: Number,
    Title: String,
    Summary: String,
    Pic: String,
}


);
const Book = mongoose.model("Book", bookSchema);

export default Book;