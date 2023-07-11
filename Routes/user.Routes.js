const express = require('express');
const {welcomeUser ,createUser ,loginUser ,getAllUser, updatePassword} = require('../controllars/user.controllar');
const isVerify = require('../middalware/auth');
const UserRoutes = express.Router();

UserRoutes.get('/', welcomeUser)

UserRoutes.post('/new-user', createUser);

UserRoutes.post('/isvalid-user', loginUser);

UserRoutes.get('/get-user', isVerify ,  getAllUser);

UserRoutes.put('/update-password', isVerify ,  updatePassword);

module.exports = UserRoutes;