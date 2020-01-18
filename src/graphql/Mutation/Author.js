
const Author = require('../../models/Author')

const addAuthor = async (obj, { input }) => {
  const insertAuthor = await Author.query().insertGraph(input).returning('*')
  return insertAuthor
}

const resolver = {
  Mutation: {
    addAuthor,
  },
}

module.exports = resolver
