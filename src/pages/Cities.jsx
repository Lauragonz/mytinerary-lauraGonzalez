import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Cities.css';
import { Card } from 'react-bootstrap';
import axios from 'axios';


const Cities = () => {
  const [cityData, setCityData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState('');

  
  useEffect(() => {
    axios.get('http://localhost:3000/cities').then((response) => {
      setCityData(response.data);
      setFilteredData(response.data);
    });
  }, []);

  const filterByCityName = (text) => {
    const filteredCities = cityData.filter(city =>
      city.name.toLowerCase().startsWith(text.toLowerCase())
    );
    setFilteredData(filteredCities);
  };

  const handleSearchInputChange = (event) => {
    const newText = event.target.value;
    setSearchText(newText);
    filterByCityName(newText);
  };

  return (
    <div>
      <div className="searchbox">
        <input
          type="text"
          value={searchText}
          onChange={handleSearchInputChange}
          placeholder="Search by name"
        />
      </div>
      <div className="row" id="rowC">
        {filteredData.map(city => (
  <NavLink
    to={`/details/${city._id}`}
    key={city._id}
    className="card clickable-card"
  >
    <Card.Img variant="top" src={city.img} />
    <Card.Body>
      <Card.Title>{ city.name }</Card.Title>
    </Card.Body>
  </NavLink>
))}

      </div>
    </div>
  );
};

export default Cities;
