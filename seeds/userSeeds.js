const User = require('../models/User');

const userData = [
  {
    username: 'Lernantino',
    password: 'Password321',
  },
  {
    username: 'Xandromus',
    password: 'Password123',
  },

];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;