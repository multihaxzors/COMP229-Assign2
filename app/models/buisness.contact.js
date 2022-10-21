/*
    File Name: buisness.contact.ejs
    Student Name: Jonathan Champ
    Student ID: 301230592
    Date: 2022-10-21
*/
import mongoose from 'mongoose';
//create a new Scheme (template)
const Schema = mongoose.Schema;
//structure new Schema as a Contact (template)
const ContactSchema = new Schema({
    name: String, 
    phonenumber: Number, 
    email: String
}, {
    timestamps: true,
    collection: 'contacts'
});
//export new Schema as Contacts
export default mongoose.model('Contacts', ContactSchema);