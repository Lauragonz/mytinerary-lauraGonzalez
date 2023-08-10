/* eslint-disable react/prop-types */
import './MainLayout.css'
import Header from './Header';
import Footer from './Footer';


const MainLayout = ({ children }) => {
  console.log(children);
  return (
    <div>
      <Header />
      <div className="content-wrapper">
        {children}
      </div>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
