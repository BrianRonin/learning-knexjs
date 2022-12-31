import knex from '../config/db'

const select = knex('users')
  .max('salary as max_salary') // salario maximo
  .min('salary as min_salary') // salario minimo
  .avg('salary as avg_salary') // média
  .sum('salary as sum_salary') // soma
  .count('salary as count_salary') // contagem de quantos salários existem

console.log(select.toSQL().sql.toString())
// select.then((e) => console.log(e))
