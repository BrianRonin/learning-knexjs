import knex from '../config/db'
// ? MAIS SOBRE RAW
// ? DOC https://knexjs.org/guide/raw.html

const myQuery = knex.raw(
  `
select id, first_name, email as uemail 
from users
where id = ?
order by id ?
limit 9,3;
  `,
  ['users', 'ASC'],
)

console.log(myQuery.toSQL().sql.toString())
