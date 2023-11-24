import React from 'react'
import "./MobileDesktopBanner.css"
function MobileDesktopBanner() {
    return (
        <div className='MobileDesktopBanner'>
            <MobileTitle/>
            <img src={process.env.PUBLIC_URL + "./assets/image-devices.png"} alt='banner' />
        </div>
    )
}

const MobileTitle = () => {
    return <div>
        <h1>Access Clipboard anywhere </h1>
        <h4>Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks. </h4>
    </div>
}


export default MobileDesktopBanner
