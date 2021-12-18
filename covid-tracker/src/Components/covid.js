import React, { useEffect } from "react";

const Covid = () => {
  const getCovidData = async () => {
    try {
      const response = await fetch('https://data.covid19india.org/v4/min/data.min.json');
      const data = await response.json();
      console.log(data.districts.total);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <div>
   
    </div>
  );
};

export default Covid;
