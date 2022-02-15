const db = require('../../data/db-config');

async function getAll() {
  let result = await db('cars');
  return result;
}

function getById(id) {
  return db('cars').where('id', id).first();
}

async function create(car) {
  const [id] = await db('cars').insert(car);
  return getById(id);
}

module.exports = {
  getAll,
  getById,
  create,
};