const http = require('http')
const app = require('./node/node/app')

const port = process.env.PORT || 3001
const server = http.createServer(app)
server.listen(port, () => console.log(`Server running port ${port}`))