import React from "react";
import { Container } from "react-bootstrap";

const Landing = () => {



    return (

    <Container id="tableLanding">

    <div className="landing">
      <h3>Thank you for checking out Payme Now!</h3>
      <h5>We pride ourselves for being:</h5>
      <ul><p>Simple and Affordable...</p></ul>
      <ul><ul>...while saving you time and money</ul></ul>
      <ul><ul><p>...with our Intuitive One Stop Design!</p></ul></ul>
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