    const User = require('../models/index');
    registerUser = async (req, res, next) => {
        try {
            const { username, password, address} = req.body;
            const createdUser = await new User({username, password, address });
            createdUser.save();

        } catch (error) {
            
        }
    }
  
    loginUser = (req, res) => {
      // TODO: complete
      res.redirect('login');
    }
  
    logoutUser = (req, res) => {
      // TODO: complete
      res.redirect('login');
    }

    module.exports = {
        registerUser,
        loginUser,
        logout,
    };
  
  

