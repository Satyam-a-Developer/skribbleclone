"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "../Play.module.css";
// import '../app/glo';
import Draw from "../drawingboard/page";

const DrawingBoard = () => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineWidth = 20;
    context.lineCap = "round";
    context.strokeStyle = "black";
  }, []);

  const startDrawing = (e: any) => {
    setDrawing(true);
    draw(e); // Start drawing immediately at the initial point
  };

  const stopDrawing = () => {
    setDrawing(false);
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.beginPath(); // Start a new path after stopping drawing
  };

  const draw = (e) => {
    if (!drawing) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const { offsetX, offsetY } = e.nativeEvent;
    context.lineTo(offsetX, offsetY);
    context.stroke();
    context.beginPath();
    context.moveTo(offsetX, offsetY);
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        width={800} // Set your desired width
        height={600}
      />
    </>
  );
};

function Playground() {
  const [mode, setmode] = useState(true);
  function netwk() {
    setmode(!true);

    console.log(mode);
  }

  return (
    <div className="App">
      <header className="App-header" onClick={netwk}>
        <></>

        <div className={styles.logo2}></div>
        {mode && <>hellow</>}
        <div className={styles.header}>
          <div className={styles.timeandround}>
            <div className={styles.clock}>
              {/* css image */}
              <img
                src="https://skribbl.io/img/clock.gif"
                width={50}
                height={50}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.round}>
              <h1>round 1 of 10</h1>
            </div>
          </div>
          <div className={styles.Guessname}>
            <span>Guess this</span>
            <br />

            <span>hello</span>

            {/* </div> */}
          </div>
          <div className={styles.settings}>
            <div>
              <img
                src="https://skribbl.io/img/settings.gif"
                width={50}
                height={50}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.playername}></div>

          <div className={styles.drawingboard}>
            <Draw />
          </div>

          <div className={styles.chat}>
            <div className={styles.chatbox}>
              <input type="text" placeholder="guess the word" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Playground;
