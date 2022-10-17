import React from "react";
import { Container } from "react-bootstrap";



const Logout = () => {


    return (

    <Container id="tablePromiseService">
      <h3>Thanks for choosing Payme now</h3>
      <h5>We look forward to continuing to help you with your business needs.</h5>
       <h3>Don't forget to follow us on Social Media</h3>
        {/* Visit us on social media! Need to add icons*/}
        <div className="socialmedia">
        <ul><a href="https://www.facebook.com">Facebook</a></ul>
        <ul><a href="https://www.youtube.com">YouTube</a></ul>
        <ul><a href="https://www.twitter.com">Twitter</a></ul>
        <ul><a href="https://www.instagram.com">Instagram</a></ul>
      </div>
      <h5>Have a nice day!</h5>

     </Container>

    )
};


export default Logout;