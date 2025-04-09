    const User = require('../models/index');
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');

    const JWT_SECRET = 'jssjjsjjIFIFI834';

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
        const { username, password } = req.body;
        try {
          const registeredUser = User.findOne({username}).select('+password');
          if( bcrypt.compare (password, registeredUser.password)){
            registeredUser.isAuth = true;
            const token = jwt.sign({id: registeredUser._id}, JWT_SECRET);
            res.status(200);
            res.json({
                message: 'Login Successfully',
                status: 'OK',
                token: token,
                username: username,
            });
          }else{
            res.json({
                message: 'Invalid Credentials',
                status: 'Not OK',
            });
          }
        } catch (error) {
            next(error);
            res.status(404).send('Error Finding User');
        }

    }

    changePassword = async (req, res) => {
        
        const token = req.headers.authorization.split('')[1];
        const verifiedToken = jwt.verify(token, JWT_SECRET);
        const userID = verifiedToken._id;

        cont 


      }

    logoutUser = (req, res) => {
      // TODO: complete
      res.redirect('login');
    }

    module.exports = {
        registerUser,
        loginUser,
        logoutUser,
        changePassword,
    };
  
  

