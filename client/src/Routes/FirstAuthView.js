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
