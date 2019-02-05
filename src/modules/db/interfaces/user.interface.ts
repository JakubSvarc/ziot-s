import { Document } from 'mongoose';

export interface IUser extends Document {
    _id: string;
    token: string | undefined;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    stations: string[];
}
