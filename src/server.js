const express = require('express')
require('dotenv').config()
const morgan = require('morgan')
const cors = require('cors')
const xss = require('xss-clean')
const helmet = require('helmet')
const compression = require('compression')
const bodyParser = require('body-parser')
const routerNavigation = require('./routes')
const connectDB = require('./config/database')
const setupSwagger = require('./config/swagger');

const app = express()
const port = process.env.SERVER_PORT
setupSwagger(app);

app.use(morgan('dev'))
app.use(cors())
// app.use(xss())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/backend11/api/v1', routerNavigation)
// app.use('/backend10/api', express.static('src/uploads'))

connectDB()


app.listen(port, () => {
  console.log(`Your express backend server is connected at port ${port}`)
})