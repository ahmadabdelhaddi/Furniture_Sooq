const asyncHandler = require('express-async-handler')
const { User } = require('../models/User')


/**
* 
*  @desc Get all User
*  @route /api/users
*  @method GET
*  @access public 
* 
*/
module.exports.getAllUsers = asyncHandler(async (req, res) => {
    const product = await User.find({}).populate('')
    res.status(200).json(product)
})