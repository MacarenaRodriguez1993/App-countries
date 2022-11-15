const {Router}=require('express');
const router =Router();
const {Activity}=require('../db');
const  {addActivity, getActivities} = require('../controllers/activities-controller')

//route post activity
router.post('/',async(req,res)=>{
    try {
        const newActivity = await addActivity(req.body);
        return res.status(201).send(newActivity)
    } catch (error) {
        
    }
})


//route get activity
router.get('/',async(req,res)=>{
    try {
        let activities = await getActivities()
        return res.status(200).json(activities)
    } catch (err) {
        return res.status(400).json({error:err.message})
    }
})
module.exports = router;