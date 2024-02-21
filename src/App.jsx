import './App.css'
import Banners from './components/Banners/Banners'
import BottomNav from './components/BottomNav/BottomNav'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <BottomNav />
      <div className="container" id="banners-container">
        <Banners />
      </div>
    </>
  )
}

export default App
