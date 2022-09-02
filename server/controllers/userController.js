const userModel = require('../models/userModel');
const passport = require('passport');
const bcrypt = require('bcryptjs');

exports.signup = (req,res,next)=>{
    console.log(req.body);
    let hashedPassword;
    bcrypt.hash(req.body.password, 10, (err, result) => {
        // if err, do something
        if(err){
            res.send('error');
            return
        }
        // otherwise, store hashedPassword in DB
        hashedPassword=result;
        const user = new userModel({username: req.body.username, password: hashedPassword});
        user.save();
        res.redirect('http://localhost:3000')
      });
}

exports.login = (req,res,next)=>{
    userModel.findOne({username: req.body.username},function(err,user){
        console.log('ERROR')
        console.log(err);
        console.log('USER')
        console.log(user);
    if(!user){
        console.log('------------_ERRRRROR_-------------------');
        res.redirect('https://auth-user-app.netlify.app/error/2');
        return;
    }
    console.log('----------------');
    console.log(user)
    console.log(user._id);
    passport.authenticate("local", {
        successRedirect: "https://auth-user-app.netlify.app/home/"+user._id,
        failureRedirect: "https://auth-user-app.netlify.app/error/1"
    })(req,res,next)
    })
};

exports.getUser = (req,res,next)=>{
    const id = req.url.slice(-24);
    userModel.findOne({_id: id},(err,user)=>{
        if(err)return;
        res.json(user);
    })
}
exports.test = (req,res,next)=>{
    userModel.findOne({username:'test'},function(err,user){
        if(err){
            console.log('error');
            return;
        }
        res.send(user);
    })
}