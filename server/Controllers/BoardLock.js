import BoardLock from "../Models/BoardLock.js";

const getBoardLock = async (req, res) => {
    try {
            const boardLock = await BoardLock.findOne({id:"1"});
            return res.status(200).json(boardLock.isLocked);
        
    } catch (error) {
       return res.status(404).json({ message: error.message });
        
    }
}

const setBoardLock = async (req, res) => {
    try {
        const boardLock = await BoardLock.findOne({id:'1'});
        boardLock.isLocked = true;
        await boardLock.save();
        return res.status(200).json({message:"Lock status updated"});
    } catch (error) {
        return res.status(404).json({ message: error.message });
        
    }
}


export {getBoardLock,setBoardLock}