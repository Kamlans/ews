import React from 'react'
import Typewriter from "typewriter-effect";
import FirebasePage from './FirebasePage';

function SubPage(props) {

    const value = props.title;
    return (
      <div
        style={{
          height: "auto",
          width: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <div style={{ fontSize: "3rem" , color:"yellow"}}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(props.sf)
                .pauseFor(2500)
                .deleteAll()
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
            options={{
              strings: [value],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <h3 syle={{ color: "white" }}>{props.desc}</h3>

        <FirebasePage />
      </div>
    );
}

export default SubPage
