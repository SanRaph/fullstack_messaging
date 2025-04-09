const jwt = require('jsonwebtoken');
const JWT_SECRET = 'jssjjsjjIFIFI834';

const auth = (req, res, next) => {
    const token = req.headers.Authorization.split('')[1];
    const verifiedToken = jwt.verify(token, JWT_SECRET);
    const userID = verifiedToken._id;
    req.auth = userID;

    if(req.params.id && req.params.id !== userID){
        res.status(401);
        res.json({
            message: "You must login",
            status: 'Not OK'
        });
    }else{
        next();
    }
};

module.exports = auth;