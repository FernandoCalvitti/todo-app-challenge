const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Create a new Schema

const TodoSchema = Schema({
    text: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: String,
        default: Date.now()
    }
})

const Todo = mongoose.model("Todo", TodoSchema)/* Create an Todo object
 model type "Todo". Params: name and Todoschema 
*/
module.exports = Todo;