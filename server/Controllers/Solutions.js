const Level1 = async (req, res) => {
    const {answer,id} = req.body;
    if(answer === 'TR$'){
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

const Level4a = async (req, res) => {
    const {answer} = req.body;
    if (answer==="STORMINGOFBASTILLE"){
        return res.status(200).json({data:true});
    }
    return res.status(400).json({data:false});
}

const Level5 = async (req, res) => {
    const {timePeriod,destination} = req.body;
    var dest = destination.replace(/\s/g, '').toLowerCase()
    if (timePeriod === '1968' && dest === 'area51nevada'){
        return res.status(200).json({data:true});
    }
    return res.status(400).json({data:false});

}


export { Level1,Level2,Level3_1,Level4a ,Level5}