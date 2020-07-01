const db = {};
db.answers  = require('./answer.data.model.js');
db.messages = require('./messages.data.model.js');
db.tags     = require('./tags.data.model');
db.comments = require('./comment.schema.model.js');
db.profiles = require('./profile.schema.model.js');
db.contacts = require('./contact.data.model.js');
db.questions = require('./question.schema.model');
db.classes  = require('./class.data.model');
db.replies  = require('./replies.data.model');
db.subject  = require('./subject.schema.model');
db.topic    = require('./topic.data.model');
db.subject  = require('./subject.schema.model');
db.resources= require('./resource.data.model');
db.user_auths= require('./user.auth.model.js');
module.exports = db;