import React from "react";
import '../Activity/activity.css'

const Activity = ({id,name,difficult,duration,season}) =>{
    return(
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
            <tbody>
                <tr>
                    <th>{id}</th>
                    <th>{name}</th>
                    <th>{difficult}</th>
                    <th>{duration}</th>
                    <th>{season}</th>
                    <th>
                        <button>Edit</button>
                        <button>Delete</button>
                    </th>
                </tr>
            </tbody>
        </table>
    )
}

export default Activity;