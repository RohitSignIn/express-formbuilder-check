const mongoose = require("mongoose")

// const fieldSchema = new mongoose.Schema({
//     type: String,
//     subtype: String,
//     label: String,
//     name: String,
//     className: String, 
//     access: Boolean,
//     required: Boolean
//   })

const formSchema = new mongoose.Schema({
    form: Object
})
const FormModel = new mongoose.model("formeasy", formSchema);

module.exports = FormModel;