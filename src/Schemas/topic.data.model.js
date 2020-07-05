var mongoose = require('mongoose');
const sc = require('../plugins/schemas');
const Schema = mongoose.Schema,
   ObjectId = Schema.Types.ObjectId;

var schema = new Schema({
    name: { type: String, required: true,  unique: true ,lowercase: true },
    code: { type: String, required: true },
    subjects: [{ type: ObjectId, ref: sc.schema_subject}],
    resources: [{ type: ObjectId, ref: sc.schema_resources }],
    questions: [{ type: ObjectId, ref: sc.schema_questions }],
    valid: { type: Boolean, default: true },
}, { emitIndexErrors: true, autoCreate: true, timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

var handleE11000 = function(error, res, next) {
    if (error.name === 'MongoError' && error.code === 11000) {
      next(new Error('There was a duplicate key error'));
    } else {
      next();
    }
  };
  schema.post('save', handleE11000);
  schema.post('update', handleE11000);
  schema.post('findOneAndUpdate', handleE11000);
  schema.post('insertMany', handleE11000);

var schema_model = mongoose.model(sc.schema_topic, schema);

schema_model.createIndexes();


module.exports = schema_model;