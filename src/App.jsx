import './App.css'
import Banners from './components/Banners/Banners'
import BestSellers from './components/BestSellers/BestSellers'
import BottomNav from './components/BottomNav/BottomNav'
import Highlight from './components/Highlight/Highlight'
import MiniBanners from './components/MiniBanners/MiniBanners'
import Navbar from './components/Navbar/Navbar'

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
    </>
  )
}

export default App
