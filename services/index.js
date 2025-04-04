    const User = require('../models/index');
    const bcrypt = require('bcrypt')
    registerUser = async (req, res, next) => {
        try {
            const { username, password, address} = req.body;
            const hashedPassword = bcrypt.hash(password, 10);
            const createdUser = await new User({username, hashedPassword, address });
            createdUser.createdAt = new Date();
            createdUser.save();
        

            res.status(200);
            res.json({
                message: "User Created",
                status: "OK",
                username: createdUser.username,
                password: createdUser.hashedPassword,
                address: createdUser.address,
                createdAt: createdUser.createdAt,
            });

        } catch (error) {
            next(error);
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
  
  

