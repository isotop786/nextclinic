import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please provide an first name"],
       
    },
    lastName: {
        type: String,
        required: [true, "Please provide an last name"],
        
    },

    email: {
        type: String, 
        required: [true, "Please provide an email"],
        unique: true
    },
    
    imageURL: {
        type: String,
        required:[true,"Please provide a imageURL"]
    },
    department: {
        type: String,
        required:[true,"Please provide a department"]
    },
  
}, {
    timestamps:true
})

const Doctor = mongoose.models.doctors || mongoose.model("doctors", doctorSchema);

export default Doctor;