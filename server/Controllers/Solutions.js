import Team from "../Models/Team.js"

const Level1 = async (req, res) => {
    const {answer,id} = req.body;
    if(answer === 'pit'){
        return res.status(200).json({data:true});
    }
    return res.status(400).json({data:false});
};

const Level2 = async (req, res) => {
    const {coordinates,year} = req.body;
    if (coordinates ==='299792311342' && year === '2600'){
        return res.status(200).json({data:true});
    }
    return res.status(400).json({data:false});
};

const Level3_1 = async (req, res) => {
    const {answer} = req.body;
    if (answer==="HTML"){
        return res.status(200).json({data:true});
    }
    return res.status(400).json({data:false});
}

const Level3_2 = async (req, res) => {
    const {answer} = req.body;
    if (answer === 'andwyn'){
        return res.status(200).json({data:true});
    }
    return res.status(400).json({data:false});
}

const Level4a = async (req, res) => {
    const {answer} = req.body;
    if (answer==="STORMINGOFBASTILLE" || answer ==="STORMINGOFTHEBASTILLE" || answer==="BASTILLE"){
        return res.status(200).json({data:true});
    }
    return res.status(400).json({data:false});
}

const Level5 = async (req, res) => {
    const {timePeriod,destination} = req.body;
    var dest = destination.replace(/\s/g, '').toLowerCase()
    // replace comma 
    dest = dest.replace(/,/g, '')
    console.log(dest)
    if (timePeriod === '1968' && dest === 'area51nevada'){
        return res.status(200).json({data:true});
    }
    return res.status(400).json({data:false});

}

const Level6a = async (req, res) => {
    const {answer} = req.body;
    if (answer === 'Andwyn here, Haha good one so far, but you wont catch me'){
        return res.status(200).json({data:true});
    }
    return res.status(400).json({data:false});

}

const Level7 = async (req, res) => {
    const {answer} = req.body;
    if (answer === 'sunan'){
        return res.status(200).json({data:true});
    }
    return res.status(400).json({data:false});
}

const Level8_1 = async (req, res) => {
    const {answer} = req.body;
    if (answer === '26001789196820303170'){
        return res.status(200).json({data:true});
    }
    return res.status(400).json({data:false});
}

const setLooped = async (req, res) => {
    const {id} = req.body;
    try {
        const team = await Team.findOne({id});
        team.currentLevel = 1;
        team.looped = true;
        await team.save();
        return res.status(200).json({data:true});
    }catch(error){
        return res.status(400).json({data:false});
        console.log(error);
    }
}


export { Level1,Level2,Level3_1,Level4a ,Level5,Level8_1,Level7,setLooped,Level3_2,Level6a}