const express = require('express')
const swaggerUI = require('swagger-ui-express')
const yaml = require('yamljs')
const path = require('path')

const swaggerUserDocs = yaml.load(path.join(__dirname, '../docs/user.yaml'))
const swaggerNoteDocs = yaml.load(path.join(__dirname, '../docs/note.yaml'))

const route = express.Router()

route.use('/api-user', swaggerUI.serve, swaggerUI.setup(swaggerUserDocs))

route.use('/api-note', swaggerUI.serve, swaggerUI.setup(swaggerNoteDocs))

module.exports = route