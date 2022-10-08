import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// // noted out
import reportWebVitals from './reportWebVitals';
// noted out do we need bootstrap? 
// import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(
//   <React.>
//     <App />
//   </React.>,
//   document.getElementById('root')
// );
ReactDOM.render(<App />, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


