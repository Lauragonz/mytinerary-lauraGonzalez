import { useEffect, useState } from "react";

import axios from "axios";

const Details = (params) => {
  const [selectedCity, setCityData] = useState(null);
  const cityId = params.selectedCity;
  const apiUrl = `http://localhost:3000/cities/${cityId}`;
  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setCityData(response.data);
    });
  }, [apiUrl]);
    
  if (!selectedCity) {
    return <div>
        <div className="card-details">No city selected</div>;
      </div>
    
  }


  return (
    <div className="card-details">
      <img src={selectedCity.img} className="card-img-top img_card" alt="#" />
      <div className="card-body">
        <h5 className="card-title fw-bolder">{selectedCity.name}</h5>
        <p className="card-text"> {selectedCity.country}</p>
        <p className="card-text">Language: { selectedCity.lang}</p>
        <p className="card-text">Currency: { selectedCity.currency }</p>
        <p className="card-text card_desc fst-italic">{selectedCity.description}</p>
      </div>
    </div>
  );
};



export default Details;
