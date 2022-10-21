/*
    File Name: auth.controller.server.ejs
    Student Name: Jonathan Champ
    Student ID: 301230592
    Date: 2022-10-21
*/


//Import passport 
import passport from 'passport';

// import DisplayName Utility method
import { UserDisplayName } from '../utils/index.js';

//Display LoginAuthFunction
export function DisplayLoginPage(req, res, next){
    if(!req.user){
        return res.render('index', {title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req) });
    }

    return res.redirect('/contact-list');
}

//Process LoginAuthFunction
export function ProcessLoginPage(req, res, next){
    passport.authenticate('local', function(err, user, info) {
        if(err){
            console.error(err);
            res.end(err);
        }     
        
        if(!user){
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }

        req.logIn(user, function(err){
            if(err){
                console.error(err);
                res.end(err);
            }

            return res.redirect('/');

        })
        
    })(req, res, next);
}
//Process LogoutRequest
export function ProcessLogoutPage(req, res, next){
    req.logOut(function(err){
        if(err){
            console.error(err);
            res.end(err);
        }

        console.log("user logged out successfully");
    });

    res.redirect('/login');
}