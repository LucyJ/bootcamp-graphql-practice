const Book = require('../../models/Book')

const addBook = async (obj, { input }) => {
  const insertBook = await Book.query().insert(input).returning('*')
  return insertBook
}

const resolver = {
  Mutation: {
    addBook,
  },
}

module.exports = resolver
