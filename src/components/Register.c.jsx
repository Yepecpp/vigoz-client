import React from 'react'

const Registerc = () => {
  return (
    <div>
    <div className="container_complet">
        <div className="center">
            <h2 className="text1">Sign Up</h2>
            <h3 className="text2">Enter email and password to continue</h3>
            <form className="form_contair_1">
                <input className="text_3"
                type="text"
                placeholder="Usermane" 
                />
                <input className="text_4" 
                id="text" 
                type="password" 
                placeholder="Password"
                />
                <button className="btn">Create Account</button>
                <hr className="hr1" /> <h2 className='rh'>continue with</h2><hr className="hr2" />
            </form>
        </div>
    </div>
</div>
  )
}
export default Registerc