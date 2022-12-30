import { Knex } from 'knex'

export async function up(
  knex: Knex,
): Promise<void> {
  return knex.schema.createTable(
    'profiles',
    (table) => {
      table.increments('id').primary()
      table.text('bio')
      table.text('description')
      table.integer('user_id').unique().unsigned()
      table
        .foreign('user_id')
        .references('users.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    },
  )
}

export async function down(
  knex: Knex,
): Promise<void> {
  return knex.schema.dropTable('profiles')
}
