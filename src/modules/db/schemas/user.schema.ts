import { Schema } from 'mongoose';

export const userSchema: Schema = new Schema({
    _id: String,
    tokens: [String],
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    stations: [String],
}, {
    versionKey: false,
});
