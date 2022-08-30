import { useEffect, useState } from "react";

function FirstAuthView() {

  const [signupView, loadSignupView] = useState(null);
  const [loginView, loadLoginView] = useState(null);

  // function Signup(){
  //   fetch('http://localhost:8080/signup')
  //     .then(result=>{
  //       console.log(result);
  //     })
  // }

  function formSubmit(){
    const form = document.querySelector('.signup-form form');

    const username = document.querySelector('#username');
    const repeatUsername = document.querySelector('#username-r');

    const password = document.querySelector('#password');
    const repeatPassword = document.querySelector('#password-r');

    if(username.value!=repeatUsername.value){
        username.setCustomValidity(`Usernames don't match`);
        username.reportValidity();
        return;
    } else {
        username.setCustomValidity('');
        username.reportValidity();
    }

    if(password.validity.patternMismatch){
        password.setCustomValidity('Your password is not secure enough: It must contain atleast 1 lower case, 1 upper case letters, 1 number and 8 characters in total');
        password.reportValidity();
        return;
    } else {
        password.setCustomValidity('');
        password.reportValidity();
    }

    if(password.value!=repeatPassword.value){
        password.setCustomValidity(`Passwords don't match`);
        password.reportValidity();
        return;
    } else {
        password.setCustomValidity('');
        password.reportValidity();
    }
    
    if(form.reportValidity())form.submit();
  }

  function Load(){
    if(signupView==null && loginView==null){
      return(
        <div className="FirstAuthView">
          <h1>CurlyBraces</h1>
          <h2>Learn data structures, algorithms, javascript methods and more!</h2>
          <div className="FirstAuthView-buttons-div">
            <button onClick={()=>{loadLoginView(true)}}>Login</button>
            <button onClick={()=>{loadSignupView(true)}}>Signup</button>
          </div>
          <h4>Proceed unauthenticated</h4>
          <button>Continue</button>
        </div>
      )
    } else if(signupView!=null){
      return(
        <div className="signup-form">
          <h2>Signup form</h2>
          <form method="post" action="http://localhost:8080/signup">
            <div className="username-inputs">
              <label htmlFor='username'>Username:</label>
              <input type={'text'} id='username' required minLength={1}></input>
              <label htmlFor='username-r'>Repeat username:</label>
              <input type={'text'} id='username-r' required minLength={1}></input>
            </div>
            <div className="password-inputs">
              <label htmlFor='password'>Password:</label>
              <input type={'password'} id='password' required minLength={8}></input>
              <label htmlFor='password-r'>Repeat password:</label>
              <input type={'password'} id='password-r' required minLength={8}></input>
            </div>
            <button type="button" onClick={()=>{formSubmit()}}>Register</button>
          </form>
          <button onClick={()=>{loadSignupView(null)}}>Go back from signup</button>
        </div>
      )
    } else if(loginView!=null){
      return(
        <div className="login-form">
          <button onClick={()=>{loadLoginView(null)}}>Go back from login</button>
        </div>
      )
    }
    }

  return (
    Load()
  )
}

export default FirstAuthView;
