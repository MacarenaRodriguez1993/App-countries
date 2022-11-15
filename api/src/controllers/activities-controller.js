const {Activity}=require('../db');

//Function create activity
const addActivity = async(body)=>{
    try {
        const {name,difficult,duration,season,countries}=body;
        const newActivity = await Activity.create({name,difficult,duration,season});
        await newActivity.addCountries(countries)
        return newActivity;
    } catch (err) {
        console.log(err)
    }
}

//function get all activity
const getActivities = async()=>{
    try {
        let find = await Activity.findAll();
        return find;
    } catch (err) {
        return res.status(400).json({error:err.message})

    }
}
module.exports={
    getActivities,
    addActivity
}