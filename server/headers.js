module.exports = headers
var cors = require('cors')
function headers (self) {
  self.app.use(cors())
  // self.app.use(function (req, res, next) {
  //   // Add all custom system headers here
  //   // Force IE to use latest rendering engine or Chrome Frame
  //   res.header('X-UA-Compatible', 'IE=Edge,chrome=1');
  //   res.header("Access-Control-Allow-Origin", "*");
  // 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //   next();
  // })
}
