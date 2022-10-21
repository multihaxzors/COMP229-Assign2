/*
    File Name: list.ejs
    Student Name: Jonathan Champ
    Student ID: 301230592
    Date: 2022-10-21
*/
//Displays current users name
export function UserDisplayName(req){
    if(req.user){
        return req.user.displayName;
    }
    return '';
}
//If they are not logged in, redirect
export function AuthGuard(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login')
    }
    next();
}