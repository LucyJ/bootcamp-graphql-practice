const Author = require('../../models/Author')
const Address = require('../../models/Address')

const authors = async () => {
  const a = await Author.query()
  return a
}

const author = async (obj, { id }) => {
  const a = await Author.query().findById(id)
  return a
}

const searchAuthors = async (obj, { input }) => {
  const results = await Author.query().where('firstName', 'LIKE', `%${input}%`)
  const resLast = await Author.query().where('lastName', 'LIKE', `%${input}%`)
  return results.concat(resLast)
}

const address = async ({ addressId }) => {
  const a = await Address.query().findById(addressId)
  return a
}

const resolver = {
  Query: {
    authors,
    author,
    searchAuthors,
  },
  Author: {
    address,
  },
}

module.exports = resolver
