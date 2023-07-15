import { Book } from "../models/Book";
import { Author } from "../models/Author";

export const mongoDataMethods = {
  getAllBooks: async (condition = null) =>
    condition === null ? await Book.find() : await Book.find(condition),
  getBook: async (id) => await Book.findById(id),
  getAllAuthors: async () => {
    console.log(1);
    return await Author.find();
  },
  getAuthor: async (id) => await Author.findById(id),
  createAuthor: async (args) => {
    const newAuthor = new Author(args);
    return await newAuthor.save();
  },
  createBook: async (args) => {
    const newBook = new Book(args);
    return await newBook.save();
  },
};
