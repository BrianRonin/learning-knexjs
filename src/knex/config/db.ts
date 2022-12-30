import knexfile from '../../db/knexfile'
import _knex from 'knex'
const knex = _knex(knexfile[process.env.NODE_ENV])

export default knex
