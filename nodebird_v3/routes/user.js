const express = require('express');

const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const UserInfo = require('../models/userInfo');

const router = express.Router();
