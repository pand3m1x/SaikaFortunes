// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";  

import Omikuji from "./pages/omikuji.jsx";
import StarFortune from "./pages/starFortune.jsx";
import SakuraFortune from "./pages/sakuraFortune.jsx";
import MoonFortune from "./pages/moonFortune.jsx";
import CloudFortune from "./pages/cloudFortune.jsx";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Omikuji />}></Route>
        <Route path="/starfortune" element={<StarFortune />}></Route>
        <Route path="/sakurafortune" element={<SakuraFortune />}></Route>
        <Route path="/moonfortune" element={<MoonFortune />}></Route>
        <Route path="/cloudfortune" element={<CloudFortune />}></Route>
      </Routes>
    </>
  )
}

export default App
