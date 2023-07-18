import { authors, books } from "../../data/static";
//resolver
export const resolvers = {
  //Query
  Query: {
    books: async (parent, args, { mongoDataMethods }) => {
      return await mongoDataMethods.getAllBooks();
    },
    book: async (parent, { id }, { mongoDataMethods }) => {
      return await mongoDataMethods.getBook(id);
    },
    authors: async (parent, args, { mongoDataMethods }) => {
      return await mongoDataMethods.getAllAuthors();
    },
    author: async (parent, { id }, { mongoDataMethods }) => {
      return await mongoDataMethods.getAuthor(id);
    },
  },
  Book: {
    author: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAuthor(parent.authorId),
  },
  Author: {
    books: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllBooks({ authorId: parent.id }),
  },

  //MUTATION
  Mutation: {
    createAuthor: async (parent, args, { mongoDataMethods }) => {
      await mongoDataMethods.createAuthor(args);
    },
    createBook: async (parent, args, { mongoDataMethods }) => {
      await mongoDataMethods.createBook(args);
    },
  },
};
