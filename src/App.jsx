import { useState } from 'react'
import './App.css'
import { Header, Footer, Card } from "./components"
import AboutMe from "./pages/AboutMe"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>

      <div className="viewport">
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
