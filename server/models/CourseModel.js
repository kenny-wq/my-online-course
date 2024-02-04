const mongoose = require("mongoose");
const { Schema } = mongoose;

const CourseSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    students: {
        type: [String],
        default: [],
    },
});

module.exports = mongoose.model("Course", CourseSchema);
