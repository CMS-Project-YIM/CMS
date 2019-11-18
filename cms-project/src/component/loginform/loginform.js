import React, { Component } from 'react';
import './style.css';
// import Loginform from '../../component/loginform';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { Button } from 'antd'
import { Form, Icon, Input, } from 'antd';
import { Line } from 'react-chartjs-2';

firebase.initializeApp({
  apiKey: "AIzaSyDFrDXI4LK9AjgBcYKIewrurXkEJGUsyBU",
  authDomain: "cms-project01-2f5b3.firebaseapp.com"
})

class Loginform extends Component {
  constructor(props) {
    super(props)
    
  }
  
  state = {
    isSignedIn: false,
    data: "",
  }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      // firebase.auth.GithubAuthProvider.PROVIDER_ID,
      // firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      // this.setState({ auth: firebase.auth().currentUser.uid})
      localStorage.setItem('img',user.photoURL)
      localStorage.setItem('name',user.displayName)
      
    
     
        fetch("http://localhost:9000/users/postUser" , {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            uidUser: firebase.auth().currentUser.uid,
            username: firebase.auth().currentUser.displayName,
            email: firebase.auth().currentUser.email,
            profilePicture: firebase.auth().currentUser.photoURL,

          })
        })
        .then(res => res.json())
        .then(res => this.setState({data : res})
        )
        .catch(err => err);
        localStorage.setItem('id',this.state.data)
      
    })
  }
 

  render() {
    // const auth = this.state.auth
    // if(auth) console.log("auth = ", typeof auth)
    
    return (
      
      <div className="App">
        
         
         <div className= "formlogin">
          <h2 className ="title">Login</h2>
    
        {this.state.isSignedIn ? (
          window.location.replace("/navbar"),
          <div></div>
          // <span>
        //     <div className="fontsignedin">Signed In!</div>
        //       <Button className="buttonsingnout"
        //         onClick={() => firebase.auth().signOut()}>
        //         Sign out!
        //       </Button>

        //     <div>
        //       <Button className="buttonHome"
        //          type="primary"
        //          a href="/navbar">
        //           Home
        //         </Button>
        // <h1 className="fontwelcome">Welcome {firebase.auth().currentUser.displayName}</h1>
        //     </div>
        //     <img className="profilepicture"
        //       alt="profile picture"
        //       src={firebase.auth().currentUser.photoURL}
        //     />

        //     <h1> this is id {firebase.auth().currentUser.uid} </h1>
        //   </span>
        ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
              
            />
          )}
      </div>
      </div>
    )
  }
}


export default Loginform;