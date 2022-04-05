import { useState } from "react"
import Axios from "axios";
import React from 'react'


function Login() {

const  [email, setEmail]= useState("")
const [password, setPassword]= useState("")

const login = () => {
    Axios.post('http://localhost:3000/sign-up', {
       email: email,
       password: password
    }).then ( () => {
        console.log("success!")
    })

}

        return (
            <form>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email </label>
                    <input type="email" onChange={(event) => {
                    setEmail(event.target.value) }} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={(event) => {
                    setPassword(event.target.value) }} className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" onClick={Login} className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
                    }

export default Login;