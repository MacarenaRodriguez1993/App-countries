//import axios from "axios";
export const CREATE_ACTIVITY ='CREATE_ACTIVITY';

export const createActivity = (activity) =>{
    return async function(dispatch){
         const newActivity = await fetch('http://localhost:3001/activities',{
             method:'POST',
             headers:{
                'Content-type':'application/json',
             },
             body:JSON.stringify(activity) 
         }).then(res=>res.json())
         
        // const newActivity = await axios.post('http://localhost:3001/activities', activity);

        return dispatch({
             type:CREATE_ACTIVITY,
             payload:newActivity,
         })
    }
}