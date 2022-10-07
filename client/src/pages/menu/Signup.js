//The Contact section has a form name, email and message and the form shows notification that the field is required if it is not filled in, and if the email is invalid it shows a message.

import React from 'react';

const styles = {
  signupStyle: {
    background: '#FFFFFF',
  },
};

export default function Signup() {

  return (
    <nav style={styles.loginStyle} className="signuppage">
    <div className="container">
      <div>
      <h1>Sign Up</h1>
      <form>
      <label><input type="email" name="email" placeholder="company name" />
      </label>
      <label><input type="email" name="email" placeholder="email" />
      </label>
        <label><input type="password" name="password" placeholder="password" /></label>
        <label><input type="confirmpassword" name="confirmpassword" placeholder="confirm password" /></label>
        <label><input type="submit" value="Submit" /></label>
        </form>
       </div>
       </div>
      </nav>
  );
}

