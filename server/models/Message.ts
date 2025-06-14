import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    subject: {type: String, required: true},
    message: {type: String, required: true},
    createdAt: {type: String, default: Date.now},
});

const Message = mongoose.model("Message", messageSchema);
export default Message;