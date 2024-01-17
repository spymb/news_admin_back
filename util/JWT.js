const jsonwebtoken = require("jsonwebtoken");

const secret = "newsadmin";

const JWT = {
  generate(value, expiresIn) {
    return jsonwebtoken.sign(value, secret, { expiresIn });
  },
  verify(token) {
    try {
      return jsonwebtoken.verify(token, secret);
    } catch (e) {
      return false;
    }
  },
};

module.exports = JWT;
