const client = require('./dbClient');

// TODO examples (not working)
const dataMapper = {
  getAllThings: async () => {
    const query = 'SELECT * FROM things;';
    return (await client.query(query)).rows;
  },
  getOnething: async (id) => {
    const query = `SELECT * FROM thing WHERE id=${id};`;
    return (await client.query(query)).rows[0];
  }
};

module.exports = dataMapper;