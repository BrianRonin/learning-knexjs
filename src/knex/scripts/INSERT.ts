import knex from '../config/db'

/*
insert into users 
(first_name, last_name, email, password) values
("Helena", "A.", "1@email.com", "3_hash"),
("Joana", "B.", "2@email.com", "4_hash"),
("Rosana", "C.", "3@email.com", "5_hash");
*/
// ? pode ser uma resposta (obj) ou um array de resposta para o "INSERT"
const data = [
  {
    first_name: 'briaffn',
    last_name: 'matffias',
    email: '001afafafafffsfaf1@',
    password: 'fjlfsfsfdfgdsfgafafafjalj',
    salary: 999,
  },
  {
    first_name: 'briaffn',
    last_name: 'matffias',
    email: '001afafafaffffafaf1@',
    password: 'fjlfsdfgdsfgaafaffafafjalj',
    salary: 999,
  },
  {
    first_name: 'briaffn',
    last_name: 'matffias',
    email: '001afaffffafaffaf1@',
    password: 'fjlfsdfgdsfgafafafjalj',
    salary: 999,
  },
]
// try {
// knex('users')
//   .insert(data)
//     .then((data) => console.log(data.toString))
// } catch (e) {
//   console.log(e.message)
// } finally {
//   knex.destroy()
// }

// *** INSERT SELECT ***
const insertSelect = knex
  .from(
    knex.raw(
      'profiles (bio, description, user_id)',
    ),
  )
  .insert((qb: typeof knex) => {
    qb.select(
      knex.raw('concat("bio from_", first_name)'),
      knex.raw(
        'concat("description from_", first_name)',
      ),
      'id',
    ).from('users')
  })

console.log(insertSelect.toSQL().sql.toString())
try {
  insertSelect.then((data) => console.log(data))
} catch (e) {
  console.log(e.message)
} finally {
  // ! não utilize knex.destroy()
  // ! fiquei 3 horas procurando o problema aqui 😓😢
  // knex.destroy()
}

// ** realizando subquery junto com insert

const insertSelectTwo = knex(
  knex.raw('users_roles (user_id, role_id)'),
).insert((qb: typeof knex) => {
  qb.select('id')
    .from('users')
    .select((qb: typeof knex) => {
      qb.select('id')
        .from('roles')
        .orderByRaw('rand()')
        .limit(1)
    })
})

console.log(
  insertSelectTwo.toSQL().sql.toString(),
)
