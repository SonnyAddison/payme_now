import React, { useState } from 'react';
import Auth from '../utils/auth'
import { ADD_PROFILE } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom'
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
  const [signUpState, setSignUpState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });


  const [addUser, { error, data }] = useMutation(ADD_PROFILE);



  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(signUpState);
    const { password, confirmPassword } = signUpState;
    password !== confirmPassword ? alert('passwords dont match') : alert('thank you for signing up!')
    try {
      const { data } = await addUser({
        variables: { ...signUpState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignUpState({
      ...signUpState,
      [name]: value,
    });
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
          <MDBTabsLink id="formBtn" onClick={() => handleJustifyClick('login')} active={justifyActive === 'login'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink id="formBtn" onClick={() => handleJustifyClick('signUp')} active={justifyActive === 'signUp'}>
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

          <MDBBtn id="formBtn" type='submit' className="mb-4 w-100">Sign up</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
   
    </div>
    
 );
};

export default LoginSignupComponent;