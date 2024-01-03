const express = require('express');
const swaggerUI = require('swagger-ui-express');
const yaml = require('yamljs');
const path = require('path');

const userDocs = yaml.load(path.join(__dirname, '../docs/user.yaml'));
const noteDocs = yaml.load(path.join(__dirname, '../docs/note.yaml'));

const route = express.Router();

// Use different routes for user and note documentation
route.use('/api-user', swaggerUI.serve, swaggerUI.setup(userDocs));
route.use('/api-note', swaggerUI.serve, swaggerUI.setup(noteDocs));

module.exports = route;
