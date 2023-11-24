import React from 'react'

function Logo() {
    return (
        <span className='logo'>
            <img src={process.env.PUBLIC_URL + "./assets/logo.svg"} alt='logo' />
        </span>
    )
}

export default Logo
