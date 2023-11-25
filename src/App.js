import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MobileDesktopBanner from './Components/MobileDesktopBanner/MobileDesktopBanner';

function App() {
  return (
    <div className="App">
      <img className='header-bg' src={process.env.PUBLIC_URL + "./assets/bg-header-desktop.png"} alt='header-bg' />
      <img className='header-bg-mobile' src={process.env.PUBLIC_URL + "./assets/bg-header-mobile.png"} alt='header-bg' />
      <Header />
      <About />
      <MobileDesktopBanner/>
      <Footer />
    </div>
  );
}

export default App;
