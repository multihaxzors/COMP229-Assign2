/*
    File Name: user.ejs
    Student Name: Jonathan Champ
    Student ID: 301230592
    Date: 2022-10-21
*/
import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
//create new Local Schema
const { PassportLocalSchema } = mongoose;

const Schema = mongoose.Schema;

//create User Schema template
const UserSchema = new Schema({
    displayName: String,
    username: String,
    emailAddress: String,    
}, {
    timestamps: true,
    colleciton: 'users'
});

UserSchema.plugin(passportLocalMongoose);

export default mongoose.model('User', UserSchema);