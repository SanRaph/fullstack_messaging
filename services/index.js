    const User = require('../models/index');
    registerUser = async (req, res, next) => {
        try {
           

        } catch (error) {
            res.status(404).send('Error Creating User');
        }
    };
  
    loginUser = (req, res) => {
      // TODO: complete
      res.redirect('login');
    };
  
    logoutUser = (req, res) => {
      // TODO: complete
      res.redirect('login');
    };

    module.exports = {
        registerUser,
        loginUser,
        logout,
    };
  
  

