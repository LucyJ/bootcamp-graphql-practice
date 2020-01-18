const Publisher = require('../../models/Publisher')
const Address = require('../../models/Address')

const publishers = async () => {
  const p = await Publisher.query()
  return p
}

const publisher = async (obj, { id }) => {
  const p = await Publisher.query().findById(id)
  return p
}

const address = async ({ addressId }) => {
  const a = await Address.query().findById(addressId)
  return a
}

const searchPublishers = async (obj, { input }) => {
  const result = await Publisher.query().where('company', 'LIKE', `%${input}%`)
  return result
}

const resolver = {
  Query: {
    publishers,
    publisher,
    searchPublishers,
  },
  Publisher: {
    address,
  },
}

module.exports = resolver
