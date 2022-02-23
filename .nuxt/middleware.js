const middleware = {}

middleware['main'] = require('../middleware/main.js')
middleware['main'] = middleware['main'].default || middleware['main']

middleware['trailingSlash'] = require('../middleware/trailingSlash.js')
middleware['trailingSlash'] = middleware['trailingSlash'].default || middleware['trailingSlash']

export default middleware
