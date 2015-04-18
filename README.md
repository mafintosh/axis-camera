# axis-camera

Client for the Axis Network camera

```
npm install axis-camera
```

## Usage

``` js
var axis = require('axis-camera')
var camera = axis({
  host: '192.168.0.10',
  username: 'my-user',
  password: 'my-password'
})

var stream = camera.video()

stream.on('data', function (data) {
  console.log('new mjpeg frame', data)
})

camera.up() // move camera up
camera.down() // move camera down
camera.left() // move camera left
camera.right() // move camera right
camera.zoom(1000) // zoom in to level 1000
camera.zoom(-1000) // zoom in to level -1000
camera.focus(2500) // focus in
camera.focus(-2500) // focus out
camera.iris(250) // set iris to 250
camera.iris(-250) // set iris to -250
```

## License

MIT
