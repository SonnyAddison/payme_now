// // //note
//SANDBOX PATHS
import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './src/pages/Home';
import Services from './src/pages/Services';
import Promise from './src/pages/Promise';
import Menu from './src/pages/Menu';
import Login from './src/pages/menu/Login';
import Signup from './src/pages/menu/Signup';
import Tagline from './src/pages/extras/Tagline';
import Placeholder from './src/pages/extras/Placeholder';
import Footer from './src/pages/extras/Footer';
//need to import image for pages
// import "./styles/style.css";

// // //note
// //original working without sandbox
// import React, { useState } from 'react';
// import NavTabs from './NavTabs';
// // import Home from './pages/Home';
// import Services from './src/pages/Services';
// import Promise from './src/pages/Promise';
// import Menu from './pages/Menu';
// import Login from './pages/menu/Login';
// import Signup from './pages/menu/Signup';
// import Tagline from './pages/extras/Tagline';
// import Placeholder from './pages/extras/Placeholder';
// import Footer from './pages/extras/Footer';
// //need to import image for pages
// import "./styles/style.css";



export default function PortfolioContainer() {
  //consider preventto add prevent default
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <div><Home /> </div>;
    }
    if (currentPage === 'Services') {
      return <div><Tagline /> <Services /> <Placeholder /> <Footer /></div>;
    }
    if (currentPage === 'Promise') {
      return <div><Tagline /> <Promise /> <Placeholder /> <Footer /></div>;
    }
    if (currentPage === 'Menu') {
      return <div><Tagline /> <Menu /> <Login /> <Signup /> <Footer /></div>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );

}


