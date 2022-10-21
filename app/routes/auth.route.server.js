/*
    File Name: auth.route.server.ejs
    Student Name: Jonathan Champ
    Student ID: 301230592
    Date: 2022-10-21
*/
import { Router } from "express";
//import authorization functions
import { DisplayLoginPage,  
    ProcessLoginPage,
    ProcessLogoutPage} 
    from "../controllers/auth.controller.server.js";

//create a new router
const router = Router();

//display Login Router
router.get('/login', DisplayLoginPage);
//process Login Page
router.post('/login', ProcessLoginPage);

//process Logout request
router.get('/logout', ProcessLogoutPage);


export default router;