import React from 'react'

function Header({username, color}) {
  return (
    <div className ="header-container">
        <h1>Welcome {username}</h1>
        <p>Your favorite color is {color}</p>
    </div>
  )
}

export default Header