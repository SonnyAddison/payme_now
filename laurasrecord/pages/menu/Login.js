//The Contact section has a form name, email and message and the form shows notification that the field is required if it is not filled in, and if the email is invalid it shows a message.

import React from 'react';

const styles = {
  loginStyle: {
    background: '#FFFFFF',
  },
};

export default function Login() {

  return (
    <nav style={styles.loginStyle} className="contactpage">
    <div className="container">
      <div>
      <h1>Login</h1>
      <form><label><input type="email" name="email" placeholder="email"/>
      </label>
        <label><input type="password" name="password" placeholder="password" /></label>
        <input type="submit" value="Submit" />
        </form>
       </div>
       </div>
      </nav>
  );
}

