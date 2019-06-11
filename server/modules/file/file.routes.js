var file = require('./file.controller.js')
var multer = require('multer')
var upload = multer({ dest: 'client/uploads/' })

module.exports = function (app, auth, mail, settings, models) {
  // GET
  app.get('/api/file/', file.getFile)
  app.get('/api/listFiles/:userId', file.getFileList)
  app.get('/api/file/:fileId', file.getFileBySlug)
  app.get('/api/file/enable/:fileId', file.enableFileBySlug)
  app.get('/api/loadSingleFile/:fileId', file.enableFileBySlug)
  // POST
  app.post('/api/file', upload.single('file'), file.postFile)

  // PUT
  app.put('/api/file/:fileId', auth.isAuthorized('file'), file.putFile)

  // DELETE
  app.delete('/api/file/:fileId', auth.isAuthorized('file'), file.deleteFile)
  

  // PARAM
  app.param('fileId', file.paramFile)
  app.param('userId', file.userFile)
}
