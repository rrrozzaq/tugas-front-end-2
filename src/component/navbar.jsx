import React from 'react'
import { useNavigate } from 'react-router'

function Navbar() {
    const navigate=useNavigate()
    const toHome=()=>navigate("/")
    const toFav=()=>navigate("/favorite")
    return (
        <div>
            <nav style={{height:"50px"}}>
            <ul>
                <li onClick={toHome}> 
                    Home
                </li>
                <li onClick={toFav}>
                    Favorite 
                </li>
            </ul>
            </nav>
            
        </div>
    )
}

export default Navbar
