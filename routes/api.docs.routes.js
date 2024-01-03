const express = require('express');
const swaggerUI = require('swagger-ui-express');
const yaml = require('yamljs');
const path = require('path');

const route = express.Router();

const noteDocs = yaml.load(path.join(__dirname, '../docs/note.yaml'));

route.use('/api-doc', swaggerUI.serveFiles(noteDocs), swaggerUI.setup(noteDocs))

module.exports = route;
