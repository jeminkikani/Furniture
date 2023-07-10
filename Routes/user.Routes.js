const express = require('express');
const {welcomeUser ,createUser} = require('../controllars/user.controllar');
const UserRoutes = express.Router();

UserRoutes.get('/', welcomeUser)

UserRoutes.post('/new-user', createUser);

module.exports = UserRoutes;