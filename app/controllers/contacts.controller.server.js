/*
    File Name: contacts.controller.server.ejs
    Student Name: Jonathan Champ
    Student ID: 301230592
    Date: 2022-10-21
*/
import contactModel from '../models/buisness.contact.js';
import { UserDisplayName } from '../utils/index.js';
//Display ContactList Function
export function DisplayContactsList(req, res, next){
    contactModel.find(function(err, contactsCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Buisness Contact List', page: 'contacts/list', contacts: contactsCollection, displayName: UserDisplayName(req)});
    })
}
//Display ContactAdd Function
export function DisplayContactsAddPage(req, res, next){
    res.render('index', { title: 'Add Buisness Contact', page: 'contacts/edit', contact: {} , displayName: UserDisplayName(req)});
}
//Process ContactAdd Function
export function ProcessContactsAddPage(req, res, next){
    
    let newContact = contactModel({
        name: req.body.name,
        phonenumber: req.body.phonenumber,
        email: req.body.email
    });

    contactModel.create(newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contact-list')
    } )
}
//Display ContactEdit Function
export function DisplayContactsEditPage(req, res, next){
    let id = req.params.id;

    contactModel.findById(id, (err, contact) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Edit Contact', page: 'contacts/edit', contact: contact, displayName: UserDisplayName(req) });
    });    
}
//Process ContactEdit Function
export function ProcessContactsEditPage(req, res, next){

    let id = req.params.id;
    
    let newContact = contactModel({
        _id: req.body.id,
        name: req.body.name,
        phonenumber: req.body.phonenumber,
        email: req.body.email
    });

    contactModel.updateOne({_id: id }, newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contact-list')
    } )
}
//Process ContactDelete Function request
export function ProcessContactsDelete(req, res, next){
    let id = req.params.id;

    contactModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/contact-list');
    })
}

