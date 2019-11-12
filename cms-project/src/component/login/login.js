import React, { PropTypes, Component } from 'react';
import '../login/style.css';

// import auth from '../firebase'
import { Form, Icon, Input, Button, Checkbox } from 'antd';


class login extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         email: '',
    //         password: '',
    //         currentUser: null,
    //         message: ''
    //     }
    // }

    // onChange = e => {
    //     const { name, value } = e.target

    //     this.setState({
    //         [name]: value
    //     })
    // }
    // onSubmit = e => {
    //     e.preventDefault()
    //     const { email, password } = this.state

    //     auth
    //     .signInWithEmailAndPassword(email, password)
    //     .then(response => {
    //         this.setState({
    //             currentUser: response.user
    //         })
    //     })
    //     .catch(error =>{
    //         this.setState({
    //             message: error.message
    //         })
    //     })
    // }
  
    render() {
        return (
            <div class="container">
                <div class className="login">
                    <div className="cardlogin">
                        <h2 className="title">
                            Login
                        </h2>

                        <div className="fromlogin">
                            {/* <form onSubmit={this.onSubmit}> */}
                            <div>
                                <div className="fontinput">Email</div>
                                <Input
                                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                // onChange={this.onChange}
                                />
                            </div>
                            <div>
                                <div className="fontinput">Password</div>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                    name="passwprd"
                                // onChange={this.onChange}
                                />
                            </div>
                            <Button a href="/navbar" className="buttonlogin" type="primary" htmlType="submit" onClick={this.login}>
                                submit
                                </Button>


                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default login;