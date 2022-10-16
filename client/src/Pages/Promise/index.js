import React from "react";
import { Container } from "react-bootstrap";
import Promisesslider from "../../components/Imagesliders/Promises/Promisesslider"
// import Promisesimageslider from './components/Imageslider/Promisesslider';

const OurPromise = () => {
    
return (

    <Container id="tablePromise">

       <div className="promises">

      <h3>OUR COMMITMENTS</h3>
      <h5>We want you to know we care, here is more about our commitments and guarantees.</h5>
      <div className = "promisesslideimages">
        <div className = "imagecontainer">< Promisesslider />
            {/* add slider */}
      </div>
      </div>
        <h3>OUR GUARANTEES</h3>

        <h3>OUR PRIVACY PLEDGE</h3>

        <h3>OUR STORY</h3>

        <h3>OUR HOPE</h3>

        <h3>OUR CHARITY</h3>

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

  );
};

export default OurPromise;