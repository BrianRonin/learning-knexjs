import knex from '../config/db'
// * obs:
// ? 1) por padrão ele faz uma consulta de "*" se não informar nada
// ? 2) conforme você vai montando a consulta com os where por ex
// ? os "AND" vai automaticamente
// ? para fazer um or você tera que especificar como "orWhere" ..etc
const select = knex('users').select(
  'email as uemail',
  'first_name',
  'id as uid',
)
// .where('id', '=', 4)
// .where({ id: 4 })
// .orWhere({ id: 5 })
// .andWhere({ first_name: 'brian' })
// .whereBetween('id', [80, 83])
// .whereIn('id', [15, 10, 20])
// < % > qualquer coisa < _ > um caractere //
// .where('first_name', 'like', '%ian')
// .orderBy('first_name', 'asc')
// .limit(5)
// .offset(5)

// select
//   .then((data) => {
//     console.log(data)
//   })
//   .finally(() => knex.destroy())

// console.log(select.toSQL())

// * selecionando varias tabelas

const selectManyTables = knex(
  knex.raw('users u, profiles p'),
).select('u.first_name', 'p.description')

console.log(
  selectManyTables.toSQL().sql.toString(),
)

// * Group

const selectWithGroup = knex('users as u')
  .select('u.first_name')
  .leftJoin('profiles as p', 'u.id', 'p.user_id')
  .count('u.id as total')
  .groupBy('u.first_name')
  .orderBy('total', 'desc')

console.log(
  selectWithGroup.toSQL().sql.toString(),
)

selectWithGroup.then((e) => console.log(e))
