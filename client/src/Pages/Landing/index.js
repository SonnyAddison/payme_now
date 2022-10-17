import React from "react";
import { Container } from "react-bootstrap";
import Whychoose from '../../media/images/whychoose.jpg';
import Testimonial1 from '../../media/images/testimonial1.jpg';
import Testimonial2 from '../../media/images/testimonial2.jpg';
import Testimonial3 from '../../media/images/testimonial3.jpg';
import Testimonial4 from '../../media/images/testimonial4.jpg';
import Testimonial5 from '../../media/images/testimonial5.jpg';
import Testimonial6 from '../../media/images/testimonial6.jpg';
import Testimonial7 from '../../media/images/testimonial7.jpg';

const Landing = () => {



    return (

    <Container id="tablePromiseService">

    <div >
      <h3>Thank you for checking out Payme Now!</h3>
      <h5>We pride ourselves for being:</h5>
      <ul><p>Simple and Affordable...</p></ul>
      <ul><ul><p>...while saving you time and money</p></ul></ul>
      <ul><ul><p>...with our Intuitive One Stop Design!</p></ul></ul>
      <h5>Why Choose Payme Now?</h5>
        <ul><p>Our site is designed for small businesses that want payroll to be simple and don't want overcomplicated services. We exist to save your time, time is money.</p></ul>
        <div className = "whychooseimage">
      <div className = "whychoose">
          <img src = {Whychoose} alt="whychoose" style ={{
                                       padding: '5px 2px 2px',
                                       display: 'flex',
                                       marginLeft: 'auto',
                                       marginRight: 'auto',
                                       border: '10px solid purple',
                                       boxshawdow: '10px 10px',
                                       radius: '25px',
                                       marginTop: '5px',
                                       marginBottom: '5px',
                                       width:'60%', 
                                       height:'60%'
                              
          }}></img>
        </div>
        <ul>We know the cost of your time every pay day is valuable and once time is gone you can't get it back!</ul>
        </div>
        <h5>WHAT OTHERS ARE SAYING</h5>
        <ul><p>Join 100's of other AZ business owners that have benefited from our services.</p></ul>
      <div className = "imagecontainer">
        <div className = "testimonial"><img src = {Testimonial1} alt="Testimonial1" style ={{
                                       padding: '5px 2px 2px',
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
          <img src = {Testimonial2} alt="Testimonial2" style ={{
                                       padding: '5px 2px 2px',
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
                    <img src = {Testimonial3} alt="Testimonial3" style ={{
                                       padding: '5px 2px 2px',
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
        <h3>Sign up or log in <a href="login">here</a>.</h3>
        <h5>Check out our <a href="services">services page</a> to see what we have to offer.</h5>
        <h5>Visit our <a href="promise">promises page</a> to learn what makes us great.</h5>
        {/* <p>Return <a href="landing">home</a></p> */}
     </div>
     <div>
     <h3>Follow us on Social Media</h3>
        {/* Visit us on social media! Need to add icons*/}
        <div className="socialmedia">
        <ul><a href="https://www.facebook.com">Facebook</a></ul>
        <ul><a href="https://www.youtube.com">YouTube</a></ul>
        <ul><a href="https://www.twitter.com">Twitter</a></ul>
        <ul><a href="https://www.instagram.com">Instagram</a></ul>
      </div></div>
        <div className="ending">
        <p>2022 @ All Rights Reserved</p>
        {/* need to fix privacy policy link */}
          <p><a href="privacyterms">Privacy Policy</a></p>
        </div>



</Container>

  )
}

export default Landing;