import { useEffect, useState } from "react";

export default function TrafficLight() {
  const [red, setRed] = useState(false);
  const [green, setGreen] = useState(false);
  const [yellow, setYellow] = useState(false);
  const [color, setColor] = useState("green");

  useEffect(() => {
    const timer = setTimeout(() => {
      setGreen(color === "green");
      setYellow(color === "yellow");
      setRed(color === "red");

      setColor(lights[color].next);
    }, lights[color].duration);

    return () => clearTimeout(timer);
  }, [color]); // Re-run effect when currentColor changes

  const lights = {
    green: {
      color: "green",
      duration: 3000,
      next: "red",
    },
    yellow: {
      color: "yellow",
      duration: 500,
      next: "green",
    },
    red: {
      color: "red",
      duration: 4000,
      next: "yellow",
    },
  };

  return (
    <div className="py-12 px-6 flex flex-col items-center justify-center space-y-5 bg-gray ">
      {/* {Object.keys(lights).map((light, idx) => (
        <div
          key={idx}
          className={`w-24 h-24 bg-${light.color === color && light[color].color} rounded-full`}
        ></div>
      ))} */}

      <div
        className={
          green
            ? "lg:w-24 lg:h-24 w-16 h-16 bg-green rounded-full"
            : "lg:w-24 lg:h-24 w-16 h-16 bg-inactive rounded-full"
        }
      ></div>
      <div
        className={
          yellow
            ? "lg:w-24 lg:h-24 w-16 h-16 bg-yellow rounded-full"
            : "lg:w-24 lg:h-24 w-16 h-16 bg-inactive rounded-full"
        }
      ></div>
      <div
        className={
          red
            ? "lg:w-24 lg:h-24 w-16 h-16 bg-red rounded-full"
            : "lg:w-24 lg:h-24 w-16 h-16 bg-inactive rounded-full"
        }
      ></div>
    </div>
  );
}
