const mongoose = require('mongoose');
const serviceSchema = mongoose.Schema({
    title: {type:String, required:[true, "title is missing"] },
    MRNo: Number,
    TokenNo: Number,
    RegistrationDate: {    type: Date,
        default: new Date()},
    Name: String,
    FatherOrHusband: String,
    DOB:{    type: Date,
        default: new Date()},
    Age: Number,
    Gender: String,
    Religion: String,
    HousNo: Number,
    Address: String,
    CNIC: Number,
    RefBy: String,
    IsZakat: Boolean,
    IsStaff:  Boolean,
    IsPAFEmp:  Boolean,
    IsRejected:  Boolean,
    }
    
)
const Service = mongoose.model('Service', serviceSchema)
module.exports = Service