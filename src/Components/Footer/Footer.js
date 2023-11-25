import React from 'react'
import "./Footer.css"
import Buttons from '../Header/Buttons'

function Footer() {
  return (
    <div className='Footer'>
      <FooterTitle />
      <FooterCards />
      <MarkaCards />
      <FooterBottom />
      <FooterContact />
    </div>
  )
}

const footerCards = [
  {
    icon: process.env.PUBLIC_URL + "./assets/icon-blacklist.svg",
    title: "Create blacklists",
    text: "Ensure sensitive information never makes its way to your clipboard by excluding certain sources ",
  },
  {
    icon: process.env.PUBLIC_URL + "./assets/icon-text.svg",
    title: "Plain text snippets",
    text: "Remove unwanted formatting from copied text for a consistent look ",
  },
  {
    icon: process.env.PUBLIC_URL + "./assets/icon-preview.svg",
    title: "Sneak preview",
    text: "Quick preview of all snippets on your Clipboard  for easy access.",
  }
]
const marka = [
  process.env.PUBLIC_URL + "./assets/logo-google.png",
  process.env.PUBLIC_URL + "./assets/logo-ibm.png",
  process.env.PUBLIC_URL + "./assets/logo-microsoft.png",
  process.env.PUBLIC_URL + "./assets/logo-hp.png",
  process.env.PUBLIC_URL + "./assets/logo-vector-graphics.png"
]

const FooterTitle = () => {
  return <>
    <h1>Supercharge your workflow </h1>
    <h4>We've got the too, to boost your productivity. </h4>
  </>
}

const FooterCards = () => {
  return <div className='FooterCards'>
    {footerCards.map((item, key) => <div key={key}>
      <img src={item.icon} alt='item' />
      <h2>{item.title}</h2>
      <h4>{item.text}</h4>
    </div>)}
  </div>
}

const MarkaCards = () => {
  return <div className='MarkaCards'>
    {marka.map((item, key) => <div key={key}>
      <img src={item} alt='marka' />
    </div>)}
  </div>
}

const FooterBottom = () => {
  return <div className='FooterBottom'>
    <h1> Clipboard for iOS and Mac OS </h1 >
    <h4 className='
    mx-96 px-32 text-center mt-4 
    md:mx-0 md:px-0
    '>Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard.</h4>
    <Buttons />
  </div>

}

const FooterContact = () => {
  return <div className='FooterContact'>
    <div className='contact-baner'>
      <img className='w-16 h-16 mx-32 md:mx-12' src={process.env.PUBLIC_URL + "./assets/logo.svg"} alt='logo' />
      <div className='flex  gap-16 
      md:flex-col md:gap-4 md:justify-center md:items-center
      '>
        <div className='flex flex-col gap-6'>
          <h4>FAQs</h4>
          <h4>Contact Us</h4>
        </div>
        <div className='flex flex-col gap-6'>
          <h4>Privacy Policy </h4>
          <h4>Press Kit </h4>
        </div>
        <h4>Install Guide </h4>
      </div>

    </div>
    <div className='flex gap-4 md:mt-12 md:gap-12'>
      <img src={process.env.PUBLIC_URL + "./assets/icon-facebook.svg"} alt='logo' />
      <img src={process.env.PUBLIC_URL + "./assets/icon-twitter.svg"} alt='logo' />
      <img src={process.env.PUBLIC_URL + "./assets/icon-instagram.svg"} alt='logo' />
    </div>
  </div>
}

export default Footer
