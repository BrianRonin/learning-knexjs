import knex from '../config/db'

const update = knex('users')
  .update({
    first_name: 'Brian',
    last_name: 'Matias',
  })
  .where({ id: 5 })

console.log(update.toSQL())

// ** utilizando round() e rand()

const updateSalary = knex('users').update({
  salary: knex.raw('round(rand() * 1000, 2)'),
})
