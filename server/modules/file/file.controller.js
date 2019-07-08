var auto = require('run-auto')
var mongoose = require('mongoose')
var files = mongoose.model('file')
var comments = mongoose.model('comment')
var fs = require('fs')
var path = require('path')
var _ = require('lodash')
var debug = require('debug')('meanstackjs:file')
var http = require('http')
var mime = require('mime');
exports.getFile = function (req, res, next) {
  debug('start getFile')
  auto({
    files: function (cb) {
      var returnedFiles
      debug(req.queryParameters)
      if (req.query.search) {
        const findConditions = Object.assign({}, req.queryParameters.filter, {$text: {$search: req.query.search}})
        returnedFiles = files.find(findConditions)
      } else {
        returnedFiles = files.find(req.queryParameters.filter || '')
      }
      returnedFiles
        .find({user: req.user.id})
        .where(req.queryParameters.where || '')
        .sort(req.queryParameters.sort || '')
        .select(req.queryParameters.select || '')
        .limit(req.queryParameters.limit || '')
        .skip(req.queryParameters.skip || '')
        .populate(req.queryParameters.populateId || 'user comments.user', req.queryParameters.populateItems || '')
        .exec(cb)
    },
    count: function (cb) {
      var returnedFiles
      if (req.query.search) {
        const findConditions = Object.assign({}, req.queryParameters.filter, {$text: {$search: req.query.search}})
        returnedFiles = files.find(findConditions)
      } else {
        returnedFiles = files.find(req.queryParameters.filter || '')
      }
      returnedFiles
        .where(req.queryParameters.where || '')
        .count()
        .exec(cb)
    }
  }, function (err, results) {
    if (err) return next(err)
    debug('end getFile')
    return res.status(200).send(results)
  })
}


exports.setParams = function(req, res, next){
  var newfile = {metaparms: JSON.stringify(req.query)};;

  req.file = _.merge(req.file, newfile)
  // console.log('merged: ',_.merge(req.file, newfile));
  // console.log('file: ',req.file);
  // return res.status(200).send(req.file)
  req.file.save(function (err) {
    return res.status(200).send("Success")
  })
}

exports.apiDownFileBySlug = function(req, res, next){
  var link = req.file.link;

  link_list = link.split('/');;
  req.file.link = '/'+link_list[link_list.length - 3]+'/'+link_list[link_list.length - 2]+'/'+link_list[link_list.length - 1];

  var dirname = __dirname;
  dirname_list = dirname.split('/');

  var uploadname = "";

  for(i = 0; i < dirname_list.length - 3; i ++){
    uploadname += dirname_list[i]+'/';
  }

  var file = uploadname+'client'+req.file.link;
  console.log('test',req.file.link);
  // res.writeHead(301, { Location: req.file.link});
  // res.end();

  var filename = path.basename(file);
  var mimetype = mime.lookup(file);

  // res.set('Content-disposition', 'attachment; filename=' + filename);
  //res.set('Content-type', mimetype);
  //var filestream = fs.createReadStream(file);
  //filestream.pipe(res);

  fs.readFile(file, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        console.log('received data: ' + data);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    } else {
        console.log(err);
    }
});
}

exports.deleteFile = function (req, res, next) {
  var file = req.file._id

  req.file.remove(function (err) {
    if (err) return next(err)

    comments.deleteMany({file: fileId}, function (err) {
      if (err) return next(err)
      res.status(204).send()
    })
  })
}

exports.postFile = function (req, res, next) {
  // EX. of how to use express validator
  // req.assert('name', 'The name cannot be blank').notEmpty()
  // var errors = req.validationErrors()

  // if (errors) {
  //   return res.status(400).send({
  //     success: false,
  //     msg: errors[0].msg,
  //     redirect: '/'
  //   })
  // }

  // req.body.user = req.user._id
  // files.create(req.body, function (err, data) {
  //   if (err) return next(err)
  //   return res.status(201).send(data)
  // })
  return savePhotoToFileAndUser(req, res, next)
}

exports.putFile = function (req, res, next) {
  req.file = _.merge(req.file, req.body)
  req.file.save(function (err) {
    if (err) return next(err)
    return res.status(200).send(req.file)
  })
}

exports.getFileBySlug = function (req, res, next) {
  debug('start getFileBySlug')
  comments
    .find({file: req.file.id})
    .populate('user')
    .limit(100)
    .exec(function (err, comments) {
      if (err) return next(err)
      req.file.comments = comments
      return res.send(req.file)
    })
  debug('end getFileBySlug')
}

exports.getFileList = function(req, res, next) {
  return res.send(req.file)
}


exports.apiGetFileBySlug = function(req, res, next){
  var values = {};
  var link = req.file.link;

  link_list = link.split('/');
  req.file.link = req.hostname+'/'+link_list[link_list.length - 3]+'/'+link_list[link_list.length - 2]+'/'+link_list[link_list.length - 1];


  // for(key in req.file){
  //   if(key != 'metaparms')
  //     values[key] = req.file[key];
  //   else
  //     values['metaparms1'] = JSON.parse(req.file['metaparms']);
  // }

  
  values['created'] =   req.file['created'];
  values['name'] =  req.file['name'];
  values['link'] =  req.file['link'];
  values['metaparms'] =   JSON.parse(req.file['metaparms']);
  if(req.file['enabled'] == false)
    return res.status(200).send("Not Enabled File")
  return res.status(200).send(values)
}

exports.enableFileBySlug = function (req, res, next) {
  var enable = !req.file.enabled 
  var newfile = {enabled: enable}
  req.file = _.merge(req.file, newfile)
  req.file.save(function (err) {
    if (err) return next(err)
    var link = req.file.link;

    link_list = link.split('/');
    req.file.link = req.hostname+'/'+link_list[link_list.length - 3]+'/'+link_list[link_list.length - 2]+'/'+link_list[link_list.length - 1];

    return res.status(200).send(req.file);
  })
}

exports.paramFile = function (req, res, next, id) { 
  debug('start paramFile')

  req.assert('fileId', 'Your File Id cannot be blank').notEmpty()
  req.assert('fileId', 'Your File Id has to be a real Id').isMongoId()

  var errors = req.validationErrors()
  if (errors) {
    return res.status(400).send({
      success: false,
      msg: errors[0].msg,
      redirect: '/'
    })
  }

  auto({
    file: function (cb) {
      files
        .findOne({_id: id})
        .populate('user')
        .exec(cb)
    }
  }, function (err, results) {
    if (err) return next(err)
    req.file = results.file
    debug('end paramFile')
    next()
  })
}

exports.userFile = function (req, res, next, id) {
 req.assert('userId', 'Your API key cannot be blank').notEmpty()
  req.assert('userId', 'Your API key has to be a real API').isMongoId()

  var errors = req.validationErrors()
  if (errors) {
    return res.status(400).send({
      success: false,
      msg: errors[0].msg,
      redirect: '/'
    })
  }

  auto({
    file: function (cb) {
      files
        .find({user: id})
        .populate('user')
        .exec(cb)
    }
  }, function (err, results) {
    if (err) return next(err)
    req.file = results.file
    debug('end paramFile')
    next()
  }) 
}



function savePhotoToFileAndUser (req, res, next) {
  debug('FileSave Start')

  fs.readFile(req.file.path, function (err, data) {
    if (err) {
      debug('end postPhoto')
      return res.status(400).send(err)
    }
    var baseUploadDir = path.resolve(__dirname, '../../../client/uploads/')
    
    var originalFilename = req.file.originalname
    var extension = originalFilename.substring(originalFilename.length - 4)
    var fullPath = baseUploadDir + '/' + req.user._id + '/' + originalFilename;
    var url = fullPath.substring(fullPath.indexOf('uploads/'))

    fs.writeFile(fullPath, data, {flag: 'w'}, function (err) {
      if (err) {
        // Create user's uploads dir if it doesn't exist
        var dir = fullPath.substring(0, fullPath.indexOf(originalFilename))
        fs.mkdirSync(dir)
        return savePhotoToFileAndUser(req, res)
      }
      var newfile = {};
      newfile['name'] = originalFilename;
      newfile['link'] = fullPath;
      newfile['user'] = req.user._id;
      files.create(newfile, function (err, data) {
        if (err) return next(err)
        return res.status(201).send(data)
      })
    })
  })
}

function ensureOldPhotoDeleted (picture) {
  return new Promise(function (resolve, reject) {
    if (picture.length) {
      var filepath = path.resolve(__dirname, '../../../client') + '/' + picture
      fs.unlink(filepath, function () {
        resolve()
      })
    } else {
      resolve()
    }
  })
}


