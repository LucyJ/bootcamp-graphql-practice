
exports.up = knex => knex.schema.createTable('authors', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table.string('firstName').notNullable()

  table.string('lastName').notNullable()

  table.integer('age')

  table.string('email').unique().notNullable()

  table.string('passhash').notNullable().defaultTo('5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8')

  table.integer('numBooksPublished').defaultTo(0)

  table
    .uuid('addressId')
    .references('addresses.id')

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTableIfExists('authors')
