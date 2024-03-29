import React, { useEffect } from "react";
import "../ShowActivities/showActivities.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getActivities,
  deleteActivity,
} from "../../../redux/actions/activities";
import swal from "sweetalert";

const ShowActivities = () => {
  const allActivities = useSelector((state) => state.activities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const onClickDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once removed, you will not be able to see the activity in the list!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteActivity(id));
        swal("congratulations, activity deleted successfully", {
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="home">
      <h3 className="titleNav">List Activities</h3>
      <Link to="/home">
        <button className="buttonBack"> ⬅GO HOME</button>
      </Link>
      <table className="tableActivities">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name Activity</th>
            <th>Difficult</th>
            <th>Duration (hours)</th>
            <th>Season</th>
            <th>Countries</th>
            <th>Actions</th>
          </tr>
        </thead>

        {allActivities?.map((act) => {
          return (
            <tbody>
              <tr>
                <th>{act.id}</th>
                <th>{act.name}</th>
                <th>{act.difficult}</th>
                <th>{act.duration}</th>
                <th>{act.season}</th>
                <th>
                  {act.countries.map((c) => {
                    return <p>{c.id}</p>;
                  })}
                </th>
                <th>
                  <Link to={`/updateActivity/${act.id}`}>
                    <button id="buttonUpdate">📝Edit</button>
                  </Link>
                  <button
                    id="buttonDelete"
                    onClick={() => onClickDelete(act.id)}
                  >
                    {" "}
                    🗑️ Delete
                  </button>
                </th>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default ShowActivities;
