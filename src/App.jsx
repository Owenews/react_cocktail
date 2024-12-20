
import Header from './components/Header'
import Home from './page/Home'
import Footer from './components/Footer'
import './App.css'
import RandomCocktail from './page/RandomCocktail'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <Header />
      


      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random-cocktail" element={<RandomCocktail />} />
      </Routes>
      </BrowserRouter>

    <Footer />
    </>
  )
}

export default App
