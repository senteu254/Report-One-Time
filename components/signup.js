import { useState } from "react";
import Axios from "axios";
import React from 'react'
//import express from 'express'


function Signup() {


const [name, setName]= useState ("")
const [phone, setPhone]= useState (0)
const [email, setEmail]= useState ("")
const [password, setPassword]= useState ("")

const signup = () => {
    Axios.post('http://localhost:3000/sign-up', {
        name: name,
       email: email,
       phone: phone,
       password: password
    }).then ( () => {
        console.log("success!")
    })

}

        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" onChange={(event) => {
                    setName(event.target.value) }} 
                    className="form-control" placeholder="Enter name" />
                </div>

                <div className = "form-group">
                    <label>Phone</label>
                    <input type="number" onChange={(event) => {
                    setPhone(event.target.value) }}  className="form-control" placeholder="Enter Phone number" />
                </div>

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

                <button type="submit" onClick={Signup} className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }

export default Signup;
 
