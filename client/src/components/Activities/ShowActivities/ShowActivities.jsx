import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Activity from '../Activity/Activity';
import {Link} from 'react-router-dom';
import {getActivities} from '../../../redux/actions/activities';

const ShowActivities = () =>{
    const allActivities = useSelector((state)=>state.activities);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getActivities())
    })
    return(
        <div className="home">
            <h3 className="titleActivities">List Activities</h3>
            <Link to='/home'><button className="buttonBack"> ← GO HOME</button></Link>
                <div className="">
                    {
                        allActivities?.map((act)=> {
                            return(
                                <Activity
                                    key={act.id}
                                    id={act.id}
                                    name={act.name}
                                    difficult={act.difficult}
                                    duration={act.duration}
                                    season={act.season}
                                />
                            )                
                        })
                    }
                </div>
                </div>
     
    )
}

export default ShowActivities