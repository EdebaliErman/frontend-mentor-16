import React from 'react'
import "./Home.css"
function Home() {
  return (
    <div>
      <header>
        <img src={process.env.PUBLIC_URL+"./assets/bg-header-desktop.png"} alt='header-bg'/>
      </header>
    </div>
  )
}

export default Home
