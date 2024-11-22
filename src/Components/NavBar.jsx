import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <nav className='NavBar' >
        <h2>Relm of Knowledge</h2>
        <ul>
            <li ><Link  to = "/">Home</Link></li>
            <li ><Link  to = "/Courses">Courses</Link></li>

        </ul>
    </nav>
  )
}
