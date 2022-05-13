import React from 'react'

import HomeAnim from '../Utils/Anim/Home/HomeAnim'


import Typewriter from "typewriter-effect";

function HomePage() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div style={{ color: "#FFD700", fontWeight: "bold", fontSize: "3rem" }}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Welcome to ISDR, NIT ROURKELA")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(2500)
                .deleteAll()
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
            options={{
              strings: [
                "Intelligent",
                "Surveillance",
                "Data",
                "Retriever",
                "Intelligent Surveillance Data Retriever",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <HomeAnim
          heading="Smart Traffic Control: "
          dataText={[
            "Automatic Traffic Control",
            "Accident Detection",
            "Traffic Density Management Control",
            "Crime Detection",
            "Parking Monitoring & Control",
            "Collaberative Traffic Management",
            "Emergency Vehicle Traffic Management",
          ]}
        />

        <HomeAnim
          heading="Pollution Monitoring and Control: "
          dataText={["CO2", "CO", "Dust", "Humidity", "Temperature"]}
        />

        <HomeAnim
          heading="Smart Home: "
          dataText={["Health emergency", "Fire emergency", "Call to owner"]}
        />
      </div>
    </div>
  );
}

export default HomePage
