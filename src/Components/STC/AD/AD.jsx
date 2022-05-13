import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./accidentdetection.css";

import SpeedingVehicle from "./BeforeAccident/SpeedingVehicle/SpeedingVehicle"

import DrowsyDriver from './BeforeAccident/DrowsyDriver/DrowsyDriver'

import StaticObj from './BeforeAccident/AboutToHitStaticObj/StaticObj'

import MovingObj from "./BeforeAccident/AboutToHitMovingObj/MovingObj";

import WrongSideDriver from "./BeforeAccident/WrongSideDriver/WrongSideDriver";


function AD() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(true);
  const [body, setBody] = useState(null);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  function Modal_func(props) {
    return (
      <>
        <Modal
          show={show}
          fullscreen={fullscreen}
          onHide={() => setShow(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.body}</Modal.Body>
        </Modal>
      </>
    );
  }

    const styles = {
      flexr: {
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
       
      },

      flexc: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "space-evenly",
        
      },
    };
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
           
          }}
        >
          <h1>Before Accident</h1>

          <h1>After Accident</h1>
        </div>
        <div style={styles.flexr}>
          <Modal_func title={title} body={body} />
          <div style={styles.flexc}>
            <Button
              variant="warning"
              onClick={() => {
                handleShow(true);
                setTitle("Speeding Vehicle");
                setBody(<SpeedingVehicle />);
              }}
            >
              Speeding Vehicle
            </Button>

            <Button
              variant="warning"
              onClick={() => {
                handleShow(true);
                setTitle("Drowsy Driver");
                setBody(<DrowsyDriver />);
              }}
            >
              Drowsy Driver
            </Button>

            <Button
              variant="warning"
              
              onClick={() => {
                handleShow(true);
                setTitle("Wrong Side Driver");
                setBody(<WrongSideDriver />);
              }}
            >
              Wrong Side Driver
            </Button>

            <Button
              variant="warning"
        
              onClick={() => {
                handleShow(true);
                setTitle("About to collide with static object");
                setBody(<StaticObj />);
              }}
            >
              About to Collide with Static Object
            </Button>

            <Button
              variant="warning"
              onClick={() => {
                handleShow(true);
                setTitle("About to Collide with Moving Object");
                setBody(<MovingObj />);
              }}
            >
              About to Collide with Moving Object
            </Button>
          </div>

          <div>
            <Button
              variant="warning"
              onClick={() => {
                handleShow(true);
                setTitle("Location");
                setBody("Location Stats shall be shown here");
              }}
            >
              Location
            </Button>
          </div>
        </div>
      </>
    );
}




export default AD;
