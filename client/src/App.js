import React from 'react';
//noting out from original repo
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// noting out old pages - do we need these ?
// import Home from './pages/Originalrepopages/Homeold';
// import Profile from './pages/Profileold';
// import Signup from './pages/Signupold';
// import Login from './pages/Loginold';
// import Header from './components/Header';
// import Footer from './components/Footer';

import PortfolioContainer from "./PortfolioContainer";
const App = () => <PortfolioContainer />;

//noting out from original repo
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <div className="flex-column justify-flex-start min-100-vh">
//           <Header />
//           <div className="container">
//             <Routes>
//               <Route 
//                 path="/" 
//                 element={<Home />} 
//               />
//               <Route 
//                 path="/login" 
//                 element={<Login />} 
//               />
//               <Route 
//                 path="/signup" 
//                 element={<Signup />} 
//               />
//               <Route 
//                 path="/me" 
//                 element={<Profile />} 
//               />
//               <Route 
//                 path="/profiles/:profileId" 
//                 element={<Profile />} 
//               />
//             </Routes>
//           </div>
//           <Footer />
//         </div>
//       </Router>
//     </ApolloProvider>
//   );
// }

export default App;
