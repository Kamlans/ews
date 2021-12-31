import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";
import HomeAnim from '../Utils/Anim/Home/HomeAnim'
import _Navbar from '../Utils/Navbar/Navbar'
import AD from "../STC/AD/AD"

function HomePage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ad" element={<AD />} />
      </Routes>
      {/* <_Navbar /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <HomeAnim
          heading="Things for hipsters:"
          dataText={[
            "Vinyl swag.",
            "Seitan jianbing.",
            "Enamel pin meditation.",
            "Denim seitan.",
            "Semiotics austin.",
            "Sriracha fanny pack.",
            "Vape raw dreamcatcher.",
            "Fam blog.",
            "90s church-key.",
            "Pabst distillery.",
            "Street art unicorn.",
          ]}
        />

        <HomeAnim
          heading="Things for hipsters:"
          dataText={[
            "Vinyl swag.",
            "Seitan jianbing.",
            "Enamel pin meditation.",
            "Denim seitan.",
            "Semiotics austin.",
            "Sriracha fanny pack.",
            "Vape raw dreamcatcher.",
            "Fam blog.",
            "90s church-key.",
            "Pabst distillery.",
            "Street art unicorn.",
          ]}
        />

        <HomeAnim
          heading="Things for hipsters:"
          dataText={[
            "Vinyl swag.",
            "Seitan jianbing.",
            "Enamel pin meditation.",
            "Denim seitan.",
            "Semiotics austin.",
            "Sriracha fanny pack.",
            "Vape raw dreamcatcher.",
            "Fam blog.",
            "90s church-key.",
            "Pabst distillery.",
            "Street art unicorn.",
          ]}
        />
      </div>
    </div>
  );
}

export default HomePage
