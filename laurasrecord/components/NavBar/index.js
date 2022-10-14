import React from "react";
import Auth from "../../utils/auth"
import { Link } from "react-router-dom"
import {NavBar, LoggedInNav} from "../../components"


function Nav() {

    function checkLogIn() {
      if (Auth.loggedIn()) {
        return < LoggedInNav />
      } else {
        return < NavBar /> 
      }
    }
  
    return (
      <header className="flex-row px-1">
        <h1>
          <Link to="/">
            <span role="img" aria-label="shopping bag">🛍️</span>
            -Shop-Shop
          </Link>
        </h1>
  
        <nav>
          {checkLogIn()}
        </nav>
      </header>
    );
  }
  
  export default Nav;