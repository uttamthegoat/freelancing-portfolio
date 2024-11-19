import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Static/Navbar'
import Footer from './components/Static/Footer'
import Loader from './utils/Loader'
import "./App.css"

// Lazy load components
const Home = lazy(() => import('./pages/Home'))

const App = () => {
  return (
    <BrowserRouter>
      <div className='App flex flex-col'>
        <Navbar />
        
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App