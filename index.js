var request = require('request')

var noop = function () {}

module.exports = function (opts) {
  var camera = {}
  var host = opts.host.indexOf('://') === -1 ? 'http://' + opts.host : opts.host
  var auth = opts.username ? 'Basic ' + new Buffer(opts.username + ':' + opts.password).toString('base64') : ''

  var headers = {}
  if (auth) headers.authorization = auth
  headers.connection = 'keep-alive'

  var get = function (query, cb) {
    request(host + '/axis-cgi/com/ptz.cgi?camera=1&' + query, {headers: headers}, cb || noop)
  }

  camera.video = function () {
    return request(host + '/mjpg/video.mjpg', {headers: headers})
  }

  camera.left = function (cb) {
    get('move=left', cb)
  }

  camera.right = function (cb) {
    get('move=right', cb)
  }

  camera.up = function (cb) {
    get('move=up', cb)
  }

  camera.down = function (cb) {
    get('move=down', cb)
  }

  camera.zoom = function (level, cb) {
    get('rzoom=' + level, cb)
  }

  camera.focus = function (level, cb) {
    get('rfocus=' + level, cb)
  }

  camera.iris = function (level, cb) {
    get('riris=' + level, cb)
  }

  return camera
}
