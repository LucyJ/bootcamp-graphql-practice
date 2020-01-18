const merge = require('lodash.merge')
// const Welcome = require('./Welcome')
const Author = require('./Author')
const Book = require('./Book')
const Publisher = require('./Publisher')
const CheckAuth = require('./CheckAuth')

const resolvers = [Author, Book, Publisher, CheckAuth]

module.exports = merge(...resolvers)
