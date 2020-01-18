const { comparePassword, createToken } = require('../../lib/auth')

// const sha256 = require('js-sha256')
const Author = require('../../models/Author')

const login = async (obj, { email, password }) => {
  const author = await Author.query().where('email', email).first()
  // console.log(author)

  if (!author) {
    throw new Error('Invalid email or password')
  }

  const isValidPassword = await comparePassword(password, author.passhash)
  // console.log(isValidPassword)

  if (!isValidPassword) {
    throw new Error('Invalid email or password')
  }

  const payload = { id: author.id }

  const token = createToken(payload)

  return { token, author }
}

const resolver = {
  Mutation: {
    login,
  },
}

module.exports = resolver
