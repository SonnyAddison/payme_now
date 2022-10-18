import React from "react";
import { Container } from "react-bootstrap";
import Promise1 from '../media/images/promise1.jpg';
import Promise2 from '../media/images/promise2.jpg';
import Promise3 from '../media/images/promise3.jpg';
import Promise4 from '../media/images/promise4.jpg';
import Promise5 from '../media/images/promise5.jpg';
import Promise6 from '../media/images/promise6.jpg';
import Promise7 from '../media/images/promise7.jpg';
import Promise8 from '../media/images/promise8.jpg';

const PromiseComp = () => {


    return (

        <Container id="tablePromiseService">

        <div>
 
       <h3>OUR COMMITMENTS</h3>
       <h5>We want you to know we care, here is more about our commitments and guarantees.</h5>
       <div className = "promiseslideimages">
        <div className = "promises">
            <img src = {Promise1} alt="Promise 1" style ={{
                                       display: 'flex',
                                       marginLeft: 'auto',
                                       marginRight: 'auto',
                                       border: '10px solid purple',
                                       boxshawdow: '10px 10px',
                                       radius: '25px',
                                       marginTop: '5px',
                                       marginBottom: '5px',
                                       width:'30%', 
                                       height:'30%'
                              
          }}></img>
                      <img src = {Promise2} alt="Commitment 1" style ={{
                                       display: 'flex',
                                       marginLeft: 'auto',
                                       marginRight: 'auto',
                                       border: '10px solid purple',
                                       boxshawdow: '10px 10px',
                                       radius: '25px',
                                       marginTop: '5px',
                                       marginBottom: '5px',
                                       width:'30%', 
                                       height:'30%'
                              
          }}></img>
          </div>
          </div>
         <h3>OUR STORY, HOPE AND CHARITY</h3>
         <div className = "promises">
         <img src = {Promise6} alt="Story 6" style ={{
                                       display: 'flex',
                                       marginLeft: 'auto',
                                       marginRight: 'auto',
                                       border: '10px solid purple',
                                       boxshawdow: '10px 10px',
                                       radius: '25px',
                                       marginTop: '5px',
                                       marginBottom: '5px',
                                       width:'30%', 
                                       height:'30%'
                              
          }}></img>
                   <img src = {Promise7} alt="Story 7" style ={{
                                       display: 'flex',
                                       marginLeft: 'auto',
                                       marginRight: 'auto',
                                       border: '10px solid purple',
                                       boxshawdow: '10px 10px',
                                       radius: '25px',
                                       marginTop: '5px',
                                       marginBottom: '5px',
                                       width:'30%', 
                                       height:'30%'
                              
          }}></img>
                      <img src = {Promise8} alt="Privacy 8" style ={{
                                       display: 'flex',
                                       marginLeft: 'auto',
                                       marginRight: 'auto',
                                       border: '10px solid purple',
                                       boxshawdow: '10px 10px',
                                       radius: '25px',
                                       marginTop: '5px',
                                       marginBottom: '5px',
                                       width:'30%', 
                                       height:'30%'
                              
          }}></img>
          </div>
          <h3>OUR GUARANTEES</h3>
         <div className = "promiseslideimages">
        <div className = "promises">
            <img src = {Promise3} alt="Promise 1" style ={{
                                       display: 'flex',
                                       marginLeft: 'auto',
                                       marginRight: 'auto',
                                       border: '10px solid purple',
                                       boxshawdow: '10px 10px',
                                       radius: '25px',
                                       marginTop: '5px',
                                       marginBottom: '5px',
                                       width:'30%', 
                                       height:'30%'
                              
          }}></img>
                      <img src = {Promise4} alt="Commitment 1" style ={{
                                       display: 'flex',
                                       marginLeft: 'auto',
                                       marginRight: 'auto',
                                       border: '10px solid purple',
                                       boxshawdow: '10px 10px',
                                       radius: '25px',
                                       marginTop: '5px',
                                       marginBottom: '5px',
                                       width:'30%', 
                                       height:'30%'
                              
          }}></img>
           <img src = {Promise5} alt="Privacy 5" style ={{
                                       display: 'flex',
                                       marginLeft: 'auto',
                                       marginRight: 'auto',
                                       border: '10px solid purple',
                                       boxshawdow: '10px 10px',
                                       radius: '25px',
                                       marginTop: '5px',
                                       marginBottom: '5px',
                                       width:'30%', 
                                       height:'30%'
                              
          }}></img>
          </div>
          </div>
         <div>
           <h3>Follow us on Social Media</h3>
             {/* Visit us on social media! Need to add icons */}
                 <div className="socialmedia">
             <ul><a href="https://www.facebook.com">Facebook</a></ul>
             <ul><a href="https://www.youtube.com">YouTube</a></ul>
             <ul><a href="https://www.twitter.com">Twitter</a></ul>
             <ul><a href="https://www.instagram.com">Instagram</a></ul>
         </div>
         </div>
     
             <div className="footer">
             <p>2022 @ All Rights Reserved</p>
             {/* need to fix privacy policy link */}
             <p><a href="privacyterms">Privacy Policy</a></p>
             </div>
         </div>
 
     </Container>

    )
};


export default PromiseComp;