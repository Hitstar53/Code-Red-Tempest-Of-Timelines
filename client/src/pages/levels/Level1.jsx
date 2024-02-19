import React, { useEffect, useRef } from "react";
import "./Level1.css";
import Layout from "./Layout";

const Level1 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    const options = {
      chars: [
        "1",
        "0",
        "1",
        "0",
        "1",
        "0",
        "1",
        "0",
        "1",
        "0",
        "1",
        "0",
        "1",
        "0",
        "1",
        "0",
        "1",
        "0",
        "1",
        "0",
        "1",
        "0",
        "1",
        "0",
      ], // characters to be displayed
      message: "message", // implementation wip
      speed: 40, //time in milliseconds
      start_position: "top", // implementation wip
      fall_direction: "bottom", // implementation wip
      font_size: 10,
      responsive: false,
      window_width: window.innerWidth,
      window_height: window.innerHeight,
      width: 100, //only works if responsive is false
      height: 100, //only works if responsive is false
    };

    const nr_of_columns = parseInt(options.window_width / options.font_size);
    const rain = Array(nr_of_columns).fill(1);

    const draw = setInterval(() => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ff00";
      ctx.font = options.font_size + "px Sawarabi Gothic";

      for (let i = 0; i < rain.length; i++) {
        // random character from the set
        const text =
          options.chars[Math.floor(Math.random() * options.chars.length)];
        ctx.fillText(text, i * options.font_size, rain[i] * options.font_size);

        if (
          rain[i] * options.font_size > canvas.height &&
          Math.random() > 0.975
        ) {
          rain[i] = 0;
        }

        //incrementing Y coordinate
        rain[i]++;
      }
    }, options.speed);

    const handleResize = () => {
      options.window_width = window.innerWidth;
      options.window_height = window.innerHeight;
      clearInterval(draw);
      draw();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(draw);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="level1">
      <canvas id="matrix-overlay" ref={canvasRef}></canvas>
    </div>
  );
};

export default Level1;
