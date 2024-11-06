import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name Required!"],
        minLength: [3, "Name must contain atleast 3 charecters!"],
    },
    email:{
        type: String,
        required: [true, "Email Required!"],
        validator:[validator.isEmail, "Enter valid email"],
    },
    subject:{
        type: String,
        required: [true, "Subject Required!"],
        minLength: [5, "subject must contain atleast 5 charecters!"],
    },
    message:{
        type: String,
        required: [true, "Message Required!"],
        minLength: [13, "Message must contain atleast 13 charecters!"],
    },

});

export const Message =  mongoose.model("Message", messageSchema);