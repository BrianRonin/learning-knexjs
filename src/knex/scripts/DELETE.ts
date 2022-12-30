import knex from '../config/db'

const deleteSql = knex('users')
  .delete()
  .where({ id: 4 })

console.log(deleteSql.toSQL().sql.toString())
