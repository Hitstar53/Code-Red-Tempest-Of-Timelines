import mongoose from 'mongoose';

const BoardLockSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    isLocked:{
        type: Boolean,
        default: false
    }
});


const BoardLock = mongoose.model('BoardLock', BoardLockSchema);

export default BoardLock;