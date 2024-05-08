import React from 'react'
import {Link} from "react-router-dom"

const MyHeading = () => {
  return (
    <nav> 
    <div>
    <Link to='home'>Home</Link>
    <Link to='contact'>Contact</Link>
    <Link to='Product'>Product</Link>
    <Link to='About'>About</Link>
    </div> 
    </nav>
  )
}

export default MyHeading;