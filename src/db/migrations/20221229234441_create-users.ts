import { Knex } from 'knex'

export async function up(
  knex: Knex,
): Promise<void> {
  return knex.schema.createTable(
    'users',
    (table) => {
      table.increments('id').primary()
      table
        .string('first_name', 100)
        .notNullable()
      table.string('last_name', 100).notNullable()
      table
        .string('email', 255)
        .notNullable()
        .unique()
      table.string('password', 255).notNullable()
      table.decimal('salary', 15, 2).notNullable()
      table.timestamps(true, true)
    },
  )
}

export async function down(
  knex: Knex,
): Promise<void> {
  return knex.schema.dropTable('users')
}
