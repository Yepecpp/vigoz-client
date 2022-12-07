import React from 'react'
const Clogin = () => {
  return (
    <div className='container'>
        <h2>Login</h2>
        <h3>Enter your credentials</h3>
        <form action="login"></form>
        <input
        className='control' 
        type="text" 
        placeholder='Username'
        />
        <div className='password'>
            <input
            className='control' 
            id='password'
            type="password"
            placeholder='password'
            />
            <button className='toogle'
            type='button'
            >
            </button>
        </div>
        <button className='control'>Login</button>
        <form action=""></form>

    </div>
  )
}


export default Clogin

