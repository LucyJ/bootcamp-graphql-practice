const Book = require('../../models/Book')
const Author = require('../../models/Author')
const Publisher = require('../../models/Publisher')

const books = async () => {
  const allB = await Book.query().withGraphJoined('[author, publisher]')
  return allB
}

const book = async (obj, { id }) => {
  const b = await Book.query().findById(id)
  return b
}

const searchBooks = async (obj, { input }) => {
  const result = await Book.query().where('title', 'LIKE', `%${input}%`)
  return result
}

const author = async ({ authorId }) => {
  const a = await Author.query().findById(authorId)
  return a
}

const publisher = async ({ publisherId }) => {
  const p = await Publisher.query().findById(publisherId)
  return p
}

const resolver = {
  Query: {
    books,
    book,
    searchBooks,
  },
  Book: {
    author,
    publisher,
  },
}

module.exports = resolver
