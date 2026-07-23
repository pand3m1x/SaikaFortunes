// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";  

import StarFortune from "./pages/starFortune.jsx";
import SakuraFortune from "./pages/sakuraFortune.jsx";


function App() {

  return (
    <>
      <Routes>
        <Route path="/starfortune" element={<StarFortune />}></Route>
        <Route path="/sakurafortune" element={<SakuraFortune />}></Route>
      </Routes>
    </>
  )
}

export default App
