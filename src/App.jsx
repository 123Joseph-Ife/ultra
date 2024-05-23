import './App.css'
import './helper-classes.css'
import './media-queries.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    </>
  )
}

export default App
