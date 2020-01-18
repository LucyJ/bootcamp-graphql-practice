const Publisher = require('../../models/Publisher')

const addPublisher = async (obj, { input }) => {
  const insertPublisher = Publisher.query().insertGraph(input).returning('*')
  return insertPublisher
}

const resolver = {
  Mutation: {
    addPublisher,
  },
}

module.exports = resolver
