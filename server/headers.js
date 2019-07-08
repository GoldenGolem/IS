module.exports = headers
var cors = require('cors')
function headers (self) {
  // self.app.use(cors({
  // 	credentials: true,
  // 	origin: 'http://3.16.161.67:3000	'
  // }))
  self.app.use(function (req, res, next) {
    // Add all custom system headers here
    // Force IE to use latest rendering engine or Chrome Frame
    res.header('X-UA-Compatible', 'IE=Edge,chrome=1');
    next();
  })
}
	