const jwt = require("jsonwebtoken");

function checkAuth(req, res, next){
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, 'secret');
        req.userData = decodedToken;
        next();
    }
    catch(err) {
        return res.status(401).json({
            'message': "Invalid or expired token provided!",
            'error': err
        })
    }
}

module.exports = {
    checkAuth: checkAuth
}