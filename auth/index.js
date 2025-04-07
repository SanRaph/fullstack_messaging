const auth = (req, res, next) => {
    const token = req.headers.Authorization.split('')[1];
    console.log(token);
};

module.exports = auth;