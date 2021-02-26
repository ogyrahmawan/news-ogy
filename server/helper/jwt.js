const jwt = require('jsonwebtoken')

function generateToken(param){
    return jwt.sign(param, 'rahasia')
}

function verifyToken(token){
    return jwt.verify(token, 'rahasia')  
}
module.exports = {
    generateToken,
    verifyToken
}

