// const jwt = require('jsonwebtoken');
// const asyncHandler = require('express-async-handler');
// const Admin = require('../models/Admin');

// exports.protect = asyncHandler(async (req, res, next) => {
//   let token;

//   if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//     token = req.headers.authorization.split(' ')[1];
//   } else if (req.cookies.jwt) {
//     token = req.cookies.jwt;
//   }

//   if (!token) {
//     return res.status(401).json({ status: 'fail', message: 'Not authorized, no token provided' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.admin = await Admin.findById(decoded.id);

//     if (!req.admin) {
//       return res.status(401).json({ status: 'fail', message: 'The admin belonging to this token does no longer exist' });
//     }

//     next();
//   } catch (error) {
//     return res.status(401).json({ status: 'fail', message: 'Invalid token' });
//   }
// });







const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");

exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;
  // console.log(token);

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.userId).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});