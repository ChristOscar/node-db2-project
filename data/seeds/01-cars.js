// STRETCH
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('cars').truncate();
    return knex('cars').insert([
      {vin: 'J15E45', make: 'Toyota', model: '4Runner', mileage: 200000, title: 'Clean', transmission: 'Automatic'},
      {vin: 'A78ET6', make: 'Toyota', model: 'Sequoia', mileage: 200000, title: 'Clean', transmission: 'Automatic'},
    ]);
  };