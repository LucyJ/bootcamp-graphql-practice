const Author = require('../../models/Author')

const checkAuth = async (obj, args, { author }) => {
  try {
    const a = await Author.query().findById(author.id)
    if (!a) {
      return 'Unauthenticated'
    }
    return `Hello ${a.firstName} ${a.lastName}!`
  } catch (err) {
    return 'Unauthenticated'
  }
}

const resolver = {
  Query: {
    checkAuth,
  },
}

module.exports = resolver
