

import React from 'react'

function Register() {
    let sty = {
        marginTop: '10px',
        marginLeft: '10px',
    }
    return (
        <div style={{
            width: '300px',
            height: '300px',
            border: '2px solid red'
        }}>
            <h1>Register Form</h1>
            <lable style={sty}>Username</lable>
            <input type='text' placeholder='enter your name' style={sty}></input><br></br>
            <lable style={sty}>Email</lable>
            <input type='email' placeholder='enter your email' style={{
                marginLeft: '45px'
            }}></input><br></br>
            <lable style={sty}>password</lable>
            <input type='password' placeholder='enter your password' style={sty}></input><br></br>
            <button style={{
                backgroundColor: 'green',
                color: 'white',
                width: '90px',
                height: '35px',
                marginLeft: '80px',
                marginTop: '70px',
                fontSize: '20px',
                cursor: 'pointer'
            }}>Login</button>
        </div>
    )
}

export default Register;