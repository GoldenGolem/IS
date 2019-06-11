var assert = require('chai').assert
var request = require('supertest')
var fileSlug = ''

describe('FILE', function () {
  describe('GET /api/file', function () {
    it('should be returning array', function (done) {
      request('localhost:3000/')
        .get('api/file')
        .expect(200, function (err, res) {
          if (err) return done(err)
          assert.isArray(res.body.files)
          fileSlug = res.body.files[0].slug
          done()
        })
    })
    it('should be returning object', function (done) {
      request('localhost:3000/')
        .get('api/file/' + fileSlug)
        .expect(200, function (err, res) {
          if (err) return done(err)
          assert.isObject(res.body)
          done()
        })
    })
  })
})
