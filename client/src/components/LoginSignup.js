import React, { useState } from 'react';
// import Auth from '../utils/auth'
// import { ADD_PROFILE } from '../utils/mutations';
// import { useMutation } from '@apollo/client';
// import { Link } from 'react-router-dom'
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';



  




const LoginSignupComponent = () => {
 
  // const [addProfile, { error }] = useMutation(ADD_PROFILE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    return console.log("PUTO")

    // Since mutation function is async, wrap in a `try...catch` to catch any network errors from throwing due to a failed request.
    // try {
    //   // Execute mutation and pass in defined parameter data as variables
    //   const { data } = await addProfile({
    //     variables: { name },
    //   });

    //   window.location.reload();
    // } catch (err) {
    //   console.error(err);
    // }
  };
  
 const [justifyActive, setJustifyActive] = useState('login');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

    return ( 
        <div >
          
        <MDBContainer id='loginSignup' className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink id="formBtn" onClick={() => handleJustifyClick('login')} active={justifyActive === 'signup'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink id="formBtn" onClick={() => handleJustifyClick('signUp')} active={justifyActive === 'login'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'login'}>

  



          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
          </div>

          <MDBBtn id="formBtn" className="mb-4 w-100">Sign in</MDBBtn>
       

        </MDBTabsPane>

        <MDBTabsPane  show={justifyActive === 'signUp' } id="signUp" >

     

          <MDBInput wrapperClass='mb-4' label='Email'   id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password'  id='form1' type='password'/>
          <MDBInput wrapperClass='mb-4' label='Confirm Password'   id='form1' type='password'/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn id="formBtn" type='submit' onClick={handleFormSubmit} className="mb-4 w-100">Sign up</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
   
    </div>
    
 );
};

export default LoginSignupComponent;