const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    authors: [Author!]!
    author(id: ID!): Author!
    publishers: [Publisher!]!
    publisher(id: ID!): Publisher!
    books: [Book!]!
    book(id: ID!): Book!
    searchBooks(input: String!): [Book!]!
    searchAuthors(input: String!): [Author!]!
    searchPublishers(input: String!): [Publisher!]!
    checkAuth: String!
  }

  type Mutation {
    addAuthor(input: addAuthorInput!): Author!
    addPublisher(input: addPublisherInput!): Publisher!
    addBook(input: addBookInput!): Book!
    addAddress(input: addAddressInput): Address!
    login(email: String!, password: String!): Authentication!
  }

  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int 
    email: String!
    passhash: String
    numBooksPublished: Int
    address: Address
  }

  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String!
    numBooksPublished: Int
    address: Address
  }

  type Book {
    id: ID!
    title: String!
    language: String!
    numPages: Int!
    datePublished: String!
    bestseller: Boolean!
    author: Author!
    publisher: Publisher!
  }

  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: String!
  }

  input addAuthorInput {
    firstName: String!
    lastName: String!
    age: Int 
    email: String!
    numBooksPublished: Int
    address: addAddressInput!
  }

  input addPublisherInput {
    company: String!
    phoneNumber: String!
    numBooksPublished: Int
    address: addAddressInput!
  }

  input addBookInput {
    title: String!
    language: String!
    numPages: Int!
    datePublished: String!
    bestseller: Boolean!
    authorId: ID!
    publisherId: ID!
  }

  input addAddressInput {
    street: String!
    city: String!
    state: String!
    zip: String!
  }

  type Authentication {
    token: String!
    author: Author!
  }
`
