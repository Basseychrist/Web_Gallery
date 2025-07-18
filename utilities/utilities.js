// filepath: c:\Users\LENOVO X1 CARBON\Desktop\Web_Gallery\Web_Gallery\utilities.js
function checkJWTToken(req, res, next) {
  // your middleware logic here
  next();
}

module.exports = {
  checkJWTToken,
  // ...other exports
};