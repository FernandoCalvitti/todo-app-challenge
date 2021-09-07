"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Create a new Schema
var TodoSchema = Schema({
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
});
var Todo = mongoose.model("Todo", TodoSchema); /* Create an Todo object
 model type "Todo". Params: name and Todoschema
*/
module.exports = Todo;
