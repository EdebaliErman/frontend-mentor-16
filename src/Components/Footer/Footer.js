import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div>
      <FooterTitle />
      <FooterCards />
      <MarkaCards />
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
  return <div>
    {footerCards.map((item, key) => <div key={key}>
      <img src={item.icon} alt='item' />
      <h2>{item.title}</h2>
      <h4>{item.text}</h4>
    </div>)}
  </div>
}

const MarkaCards = () => {
  return <div>
    {marka.map((item, key) => <div key={key}>
      <img src={item} alt='marka' />
    </div>)}
  </div>
}


export default Footer
