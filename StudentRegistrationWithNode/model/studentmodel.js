const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    Student_id:Number,
        FirstName: String,
            LastName: String,
            Address: String,
            Email: String,
            Mobile: String,
            Age: Number
});

// const studentModel= mongoose.model('collectio name' , set your schema with keys);
const studentModel = mongoose.model('student' , studentSchema);

module.exports = studentModel;