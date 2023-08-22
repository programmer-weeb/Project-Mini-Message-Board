const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    text: String,
    user: String,
    added: Date.now()
})

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
// module.exports = mongoose.model('Message', messageSchema);