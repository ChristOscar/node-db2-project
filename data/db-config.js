// no need to change this file
const knex = require('knex')
const config = require('../knexfile.js')
const env = process.env.NODE_ENV || 'development'

const db = knex(config[env]);

module.exports = db;
