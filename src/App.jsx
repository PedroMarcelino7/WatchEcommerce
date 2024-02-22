import './App.css'
import Banners from './components/Banners/Banners'
import BestSellers from './components/BestSellers/BestSellers'
import BottomNav from './components/BottomNav/BottomNav'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Highlight from './components/Highlight/Highlight'
import MiniBanners from './components/MiniBanners/MiniBanners'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'

function App() {
  return (
    <>
      <Navbar />
      <BottomNav />

      <div className="container" id="banners-container">
        <Banners />
        <MiniBanners />
      </div>

      <BestSellers />

      <Highlight />

      <News />

      <Gallery />

      <Footer />
    </>
  )
}

export default App
