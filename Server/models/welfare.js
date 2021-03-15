const mongoose = require('mongoose');
const welfareSchema = mongoose.Schema({
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
const Welfare = mongoose.model('Welfare', welfareSchema)
module.exports = Welfare