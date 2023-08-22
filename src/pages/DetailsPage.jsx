import { useParams } from 'react-router-dom';
import Details from '../components/details';

const DetailsPage = () => {
  const { cityId } = useParams();
  return (
    
    <div>
      
      <Details selectedCity={cityId} />
    </div>
  );
};

export default DetailsPage;
