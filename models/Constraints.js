const mongoose = require("mongoose");
const { Number, String } = mongoose.Schema.Types;

const constraintsSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    tripID: {
        type: Number,
        default: 1
    }
});

const Constraints = mongoose.model("Constraints", constraintsSchema);
module.exports = Constraints