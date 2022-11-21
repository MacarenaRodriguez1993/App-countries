//import axios from "axios";
export const CREATE_ACTIVITY ='CREATE_ACTIVITY';
export const GET_ACTIVITIES='GET_ACTIVITIES';
export const FILTER_ACTIVITY='FILTER_ACTIVITY';
export const DELETE_ACTIVITY='DELETE_ACTIVITY'; 

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
export const getActivities = ()=>{
    return async function(dispatch){
        await fetch('http://localhost:3001/activities')
            .then(resp => resp.json())
            .then(activity=>{
                dispatch({
                    type:GET_ACTIVITIES,
                    payload:activity
                })
            })
    }
}
export const deleteActivity = (id)=>{
   
    return  function(dispatch){
        return dispatch({
            type:DELETE_ACTIVITY,
            payload:id
        })
        
    }
}
export const filterActivity = (payload) => {
    return {
      type: FILTER_ACTIVITY,
      payload,
    };
};

