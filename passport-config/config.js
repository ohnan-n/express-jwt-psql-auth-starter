const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  jwtSecret: process.env.JWTSECRET,
  jwtSession: {
    session: false
  }
}