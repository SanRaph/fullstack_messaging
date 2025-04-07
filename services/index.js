    const User = require('../models/index');
    const bcrypt = require('bcrypt')
    registerUser = async (req, res, next) => {
        try {
            const { username, password, address} = req.body;
            // if(password.length < 8) res.send('Password Too Short');
            // if(username && username !== 'String') res.send('Invalid Username');


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
  
    loginUser = async (req, res, next) => {
        const { password, username } = req.body;
        try {
            User.findOne({});
        } catch (error) {
           
        }

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
  
  

