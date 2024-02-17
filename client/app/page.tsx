import Image from "next/image";
import Play from "./Play.module.css";
"use client"
import Link from "next/link";
import { useEffect } from "react";
import { doc } from "prettier";
import { Socket } from "socket.io-client";
import { io } from "socket.io-client";
export default function Home() {
  useEffect(() => {
    const socket = io("http://localhost:3001");

    socket.on("input", (text) => {
      const el2 = document.createElement("h1");
      el2.innerHTML = text;
      document.querySelector(".chat").appendChild(el2);
    });

    document.getElementById("play").addEventListener("click", () => {
      const text = document.getElementById("input").value;
      //  console.log(text);
      socket.emit("input", text);
    });
  });

  return (
    <div>
      {/* <Play/> */}

      <div className="all">
        <div className="chat"></div>
        <div className="logo"></div>
        <div className="characters"></div>

        <div className="User-box">
          <div className="header">
            <input type="text" placeholder="Enter your name" id="input" />
            {/* option options */}
            <select>
              <option value="en" data-lang="English">
                English
              </option>
              <option value="es" data-lang="Spanish">
                Spanish
              </option>
              <option value="fr" data-lang="French">
                French
              </option>
              {/* <!-- Add more options as needed --> */}
            </select>
          </div>

          <div className="Character-avatar"></div>
          <div className="play">
            <Link href="/draw">Play</Link>
          </div>

          <div className="private">
            <button id="play">Create private room</button>
          </div>
        </div>
      </div>
    </div>
  );
}
