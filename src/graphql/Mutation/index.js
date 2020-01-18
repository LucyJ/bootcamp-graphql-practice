const merge = require('lodash.merge')
const Book = require('./Book')
const Author = require('./Author')
const Publisher = require('./Publisher')
const Login = require('./Login')

const resolvers = [Book, Author, Publisher, Login]

module.exports = merge(...resolvers)
