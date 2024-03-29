import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../countryDetails/countryDetails.css";
import { getCountryDetails } from "../../redux/actions/countries";
import { Link } from "react-router-dom";
import { BiMap } from "react-icons/bi";

const CountryDetails = (props) => {
  const dispatch = useDispatch();
  const countryDetails = useSelector((state) => state.countryDetails);
  const activ = useSelector((state) => state.activities);
  const countryId = props.match.params.id;
  console.log(countryDetails);
  const showActivities = () => {
    if (countryDetails.activities.length === 0) {
      const a = document.getElementById("msjNoActiv");
      a.style.display = "block";
    } else {
      const a = document.getElementById("activities");
      a.style.display = "block";
    }
  };

  useEffect(() => {
    dispatch(getCountryDetails(countryId));
  }, [dispatch, countryId]);

  return (
    <div className="home">
      <h3 className="titleNav"> {countryDetails.name} Details </h3>
      <Link to="/home">
        <button className="buttonBack"> ← GO HOME</button>
      </Link>
      <div className="page">
        <div className="countryDetails">
          <div className="headerDetails">
            <h4 id="code">Code :{countryDetails.id}</h4>
            <h5>Country Name: {countryDetails.name}</h5>
          </div>
          <div className="contentDetails">
            <img
              className="flagDetails"
              src={countryDetails.flagImage}
              alt={countryDetails.name}
            />
            <div id="content">
              <h5>Capital : {countryDetails.capital}</h5>
              <h5>Region: {countryDetails.subregion}</h5>
              <h5>Area: {countryDetails.area} km2</h5>
              <h5>Population: {countryDetails.population}</h5>
              <div style={{ display: "flex", padding: "0.5em" }}>
                <a
                  style={{
                    color: "#d9b07e",
                    cursor: "pointer",
                    textDecoration: "none",
                    alignItems: "center",
                  }}
                  target="_blank"
                  href={countryDetails.maps}
                  rel="noreferrer"
                >
                  <BiMap size="2em" /> Ubicacion
                </a>
                <button className="butActiv" onClick={showActivities}>
                  Activities
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="msjNoActiv">
          <p>This country has`n activities</p>
        </div>
        <div className="activities" id="activities">
          <h4>Activities:</h4>
          {
            <table className="tableActivities" id="activityDetails">
              {
                <thead>
                  <tr className="actR">
                    <th>Name Activity</th>
                    <th>Difficult</th>
                    <th>Duration (hours)</th>
                    <th>Season</th>
                    <th>Detalles</th>
                  </tr>
                </thead>
              }

              {countryDetails.activities?.map((act) => {
                return (
                  <tbody>
                    <tr className="actR">
                      <th>{act.name}</th>
                      <th>{act.difficult}</th>
                      <th>{act.duration}</th>
                      <th>{act.season}</th>
                      <th>
                        <button className="btn btn-success">Detalles</button>
                      </th>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          }
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
