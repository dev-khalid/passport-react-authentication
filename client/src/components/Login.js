import React from 'react'

const Login = () => {
  const signInWithGithub = () => { 
    window.open('http://localhost:5000/auth/github',"_self"); 
  }
  return (
    <button type='button' onClick={signInWithGithub}>
      Sign In with Github
    </button>
  )
}

export default Login
