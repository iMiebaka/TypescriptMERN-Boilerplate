import mongoose from "mongoose";


const OtherSchema = new mongoose.Schema({
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    others: [{
        other: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        },
        score: Number,
        answer: String
    }],
    total: {
        total: Number,
        totalPassed: Number,  
    },
});
export default mongoose.model("Other", OtherSchema)
