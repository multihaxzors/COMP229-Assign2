/*
    File Name: contacts.route.server.ejs
    Student Name: Jonathan Champ
    Student ID: 301230592
    Date: 2022-10-21
*/
import { Router } from "express";
//import Buisness Contacts function
import {  DisplayContactsList, 
    DisplayContactsAddPage, 
    ProcessContactsAddPage, 
    ProcessContactsEditPage, 
    DisplayContactsEditPage, 
    ProcessContactsDelete } from "../controllers/contacts.controller.server.js";

import { AuthGuard } from "../utils/index.js";
//create a new router
const router = Router();

//route each contact request function
router.get('/contact-list', DisplayContactsList);
router.get('/contact-add', AuthGuard, DisplayContactsAddPage);
router.post('/contact-add', AuthGuard,ProcessContactsAddPage);
router.post('/contact-edit/:id', AuthGuard,ProcessContactsEditPage);
router.get('/contact-edit/:id', AuthGuard,DisplayContactsEditPage);
router.get('/contact-delete/:id', AuthGuard,ProcessContactsDelete);

export default router;