import React from "react";
import { Container } from "react-bootstrap";



const Support = () => {


    return (

    <Container id="tableSupport">

    <div className="support">
        <h3>SUPPORT QUESTIONS</h3>
        <h5>Need Help? See our FAQ's below for answers</h5>
        <ul>
          <li>I can't log in
            <ul>Please <a href="admin@paymenow.com">Contact us</a> - Soon our site will allow you to reset your log in. If you try to reset your log in on the <a href="login">log in page</a> and it doesn't work please reach out to our customer care team.
            </ul>
          </li>
        </ul>
        <ul>
          <li>I've been locked out of my account!
            <ul>For your protection after 3 attempts you will be locked out for up to 30 minutes. Please check your email to reset your account to log in again.
            </ul>
          </li>
        </ul>
        <ul>
          <li>I need to pay a contractor?</li>
        <ul>At this time our site only works for employees and is not set up for contractors. You will have to issue a company check and invoice or receipt for their services rendered through your bank.</ul>
        </ul>
        <ul>
          <li>I hire senior citizens and they do not have to pay FICA and Medicare?
            <ul>We took care of the exempt options for you. Any one that is exempt from Social Security, Medicare, or Federal or Arizona State Taxes has the option to be exempted in the calculation.
            </ul>
          </li>
        </ul>
        <ul>
          <li>I had no employees work this month, do I still need to pay?
            <ul>Our service is monthly but there are also no charges to cancel or pause your monthly plan. We understand that small businesses may have seasons and made these options for you. Just contact us to let us know 10 days before your month is due and we will work it out.
            </ul>
          </li>
        </ul>
        <ul>
          <li>I need to get my employee records. Where do I go?
            <ul>After you sign in pick which company you are looking for information, then you will be taken to the page with the information
            </ul>
          </li>
        </ul>
        <ul>
          <li>I have a nonresident alien that I need to issue a paycheck stub. to pay a contractor?
            <ul>The option to select a nonresident alien for tax calculation is coming soon! Until it is launched please issue your own stub.
            </ul>
          </li>
          </ul>
        <h5>Can't find the answers to what you need help with? <a href="admin@paymenow.com">Contact us</a></h5>
        <h3>Our customer care team looks forward to assisting you!</h3>


    </div>
    
     </Container>

    )
};


export default Support;