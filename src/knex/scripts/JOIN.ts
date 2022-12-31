import knex from '../config/db'

const innerJoin = knex('users as u')
  .select('u.first_name', 'p.description')
  .innerJoin('profiles as p', 'u.id', 'p.user_id')

console.log(innerJoin.toSQL().sql.toString())

const leftJoin = knex('users as u')
  .select('u.first_name', 'p.bio')
  .leftJoin('profiles as p', 'u.id', 'p.user_id')

const rightJoin = knex('users as u')
  .select('u.first_name', 'p.description')
  .rightJoin('profiles as p', 'u.id', 'p.user_id')

// .then((d) => console.log(d))
// .finally(() => knex.destroy())

const updateWithJoin = knex('users as u')
  .join('profiles as p', 'u.id', 'p.user_id')
  .update({
    'p.bio': knex.raw(
      'CONCAT(p.bio, " atualizado")',
    ),
  })

console.log(updateWithJoin.toSQL().sql.toString())

// ! não é possivel diretamente pois knex deleta join após qualquer delete
const deleletWithJoin = knex.raw(
  `
delete p, u from users as u
inner join profiles as p
on p.user_id = u.id
where u.first_name = ?
`,
  ['Shana'],
)

console.log(
  deleletWithJoin.toSQL().sql.toString(),
)
