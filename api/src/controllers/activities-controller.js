const {Activity}=require('../db');

const createActivity = async(req,res)=>{
    const {name,difficult,duration,season,countries}=req.body;
    try {
        //FALTARIA AGREGAR VALIDACIONES
        const newActivity= await Activity.create({name,difficult,duration,season});
        await newActivity.addCountries(countries)
        return res.status(201).json({activity:newActivity})
        
    } catch (err) {
        return res.status(400).json({error:err.message})
    }
}
// EXTRA - get list of activities
const getActivity = async(req,res)=>{
    try {
        const activities= await Activity.findAll();
        return res.status(200).json(activities)
    } catch (err) {
        return res.status(400).json({error:err.message})
    }
}

module.exports={
    createActivity,
    getActivity
}