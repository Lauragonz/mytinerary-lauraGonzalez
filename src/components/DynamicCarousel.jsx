import{ useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './DynamicCarousel.css'

function DynamicCarousel() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch('/cities.json')
      .then(response => response.json())
      .then(data => setCities(data))
      .catch(error => console.error('Error fetching cities:', error));
  }, []);

  const chunkArray = (array, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const slicedCities = chunkArray(cities, 4);

  return (
    <div className="container mt-5">
      <Carousel className='carousel-container'>
        {slicedCities.map((cityGroup, index) => (
          <Carousel.Item key={index}>
            <div className="row">
              {cityGroup.map(city => (
                <div key={`${city.name}-${index}`} className="col-md-3">
                  <div className="card card-container">
                    <img
                      src={`${city.img}`} 
                      className="card-img-top card-image"
                      alt={city.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{city.name}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default DynamicCarousel;
