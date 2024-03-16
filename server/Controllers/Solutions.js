const Level1 = async (req, res) => {
    const {answer,id} = req.body;
    if(answer === 'TR$'){
        return res.status(200).json({data:true});
    }
    return res.status(400).json({data:false});
};



export { Level1 }