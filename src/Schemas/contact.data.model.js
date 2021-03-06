const sc = require('../plugins/schemas');
var mongoose = require('mongoose');
// Setup schema
var contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String
});
// Export Contact model
var Contact = module.exports = mongoose.model(sc.schema_contacts, contactSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
};