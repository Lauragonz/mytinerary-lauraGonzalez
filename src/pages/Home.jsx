import './Home.css';
import Hero from '../components/Hero';
import DynamicCarousel from '../components/DynamicCarousel';




function Home() {
  return (
    <>
      <div className="home">
        <Hero />
        <DynamicCarousel />
      </div>
    </>
  );
}

export default Home;
