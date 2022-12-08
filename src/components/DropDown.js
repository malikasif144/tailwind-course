import React, { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "bootstrap/dist/css/bootstrap.min.css";
const animatedComponents = makeAnimated();
const Countries = [
  { label: "Pakistan", value: 355 },
  { label: "India", value: 54 },
  { label: "Bangladesh", value: 43 },
  { label: "Iran", value: 61 },
  { label: "Iraq", value: 965 },
  { label: "Afghanistan", value: 46 },
  { label: "Soudi Arabia", value: 58 },
];
const DropDown = () => {
  const [country, setCountry] = useState();

  const selectHandler = (e) => {
    setCountry(e);
  };
  useEffect(() => {
    console.log(country);
  }, [country]);
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <Select
            options={Countries}
            value={country}
            onChange={selectHandler}
            components={animatedComponents}
            isMulti
          />
        </div>
        <div className="col-md-4"></div>
      </div>
      {country?.map((item, index) => {
        return (
          <div key={index}>
            <p>
              {" "}
              <strong>{item.label}</strong>&nbsp;value{" "}
              <strong>{item.value}</strong>{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default DropDown;
