    const User = require('../models/index');
    registerUser = async (req, res, next) => {
        try {
            const { username, password, address} = req.body;
            const createdUser = await new User({username, password, address });
            createdUser.save();

            res.status(200);
            res.json({
                message: "User Created",
                status: "OK",
                data: createdUser,
            });

        } catch (error) {
            res.status(404).send('Error Creating User');
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
        logoutUser,
    };
  
  

