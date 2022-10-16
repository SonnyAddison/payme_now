import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import SiteImage from './media/image.jpg';
import OurPromise from './Pages/Promise/index';
import './App.css';
import Home  from './Pages/Home/index';
import Payroll from './Pages/Payroll/index';
import LoginSignup from './Pages/LoginSignup/index';
import Landing from './Pages/Landing/index'
import Services from './Pages/Services/index';
import Privacyterms from './components/Privacyterms/Privacyterms';
import Support from './components/Supportfaqs/Support';
import Logout from './components/Logout/Logout';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {
  return(
 
  <Container id="AppRoutes">

    < Home />
    <SiteImage/>
      

        <Routes>
          
          <Route path="/payrollsheet" element = {<Payroll />}/>
            
          <Route path="/login" element= {<LoginSignup />}/>
            
          <Route path="/promise" element= {<OurPromise />}/>

          <Route path="/services" element= {<Services />}/>

          
          <Route path="/landing" element= {<Landing />}/>

          <Route path="/logout" element= {<Logout />}/>

          <Route path="/support" element= {<Support />}/>

          <Route path="/privacyterms" element= {<Privacyterms />}/>

        </Routes>      

  
    
</Container>
         
  );
}

export default App;

