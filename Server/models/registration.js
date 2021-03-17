const mongoose = require('mongoose');
const registrationSchema = mongoose.Schema({
    MRNo: String,
    TokenNo: Number,
    RegistrationDate: {
        type: Date,
        default: new Date()
    },
    Name: String,
    FatherOrHusband: String,
    DOB: {
        type: Date,
        default: new Date()
    },
    Age: Number,
    Gender: String,
    Religion: String,
    HousNo: String,
    Address: String,
    CNIC: String,
    RefBy: String,
    IsZakat: String,
    IsStaff: Boolean,
    IsPAFEmp: Boolean,
    IsRejected: Boolean,
}

)
const Registration = mongoose.model('Registration', registrationSchema)
module.exports = Registration