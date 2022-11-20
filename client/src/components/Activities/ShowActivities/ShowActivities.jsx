import React, { useEffect } from "react";
import '../ShowActivities/showActivities.css'
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import {getActivities} from '../../../redux/actions/activities';

const ShowActivities = () =>{
    const allActivities = useSelector((state)=>state.activities);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getActivities())
    },[dispatch])
    
    return(
        <div className="home">
            <h3 className="titleActivities">List Activities</h3>
            <Link to='/home'><button className="buttonBack"> ← GO HOME</button></Link>
                <table className="tableActivities">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name Activity</th>
                            <th>Difficult</th>
                            <th>Duration (hours)</th>
                            <th>Season</th>
                            <th>Actions</th>
                        </tr>
                     </thead>
          
       
                    {
                        allActivities?.map((act)=> {
                            return( 
                            <tbody>
                            <tr>
                                <th>{act.ID}</th>
                                <th>{act.name}</th>
                                <th>{act.difficult}</th>
                                <th>{act.duration}</th>
                                <th>{act.season}</th>
                                <th>
                                    <button id='buttonUpdate'>Edit</button>
                                    <button id='buttonDelete'>Delete</button>
                                </th>
                            </tr>
                        </tbody>)
                                          
                        })
                    }
                </table>
                </div>
     
    )
}

export default ShowActivities