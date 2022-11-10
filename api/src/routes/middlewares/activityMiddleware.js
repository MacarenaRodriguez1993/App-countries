const {Router}=require('express');
const router =Router();
const{createActivity,getActivity}=require('../../controllers/activities-controller')

router.post('/',createActivity)
router.get('/',getActivity)
module.exports = router;