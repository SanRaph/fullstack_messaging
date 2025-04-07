const auth = (req, res, next) => {
    const token = req.headers.Authorization.split('')[1];
    
};

module.exports = auth;