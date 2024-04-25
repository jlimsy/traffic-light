import { useEffect, useState } from "react";

export default function TrafficLight() {
  // set initial state of green to true
  // const [green, setGreen] = useState(true);
  // const [red, setRed] = useState(false);
  // const [yellow, setYellow] = useState(false);
  const [color, setColor] = useState("green");

  useEffect(() => {
    const timer = setTimeout(() => {
      setColor(lights[color].next);
      console.log(color);
    }, lights[color].duration);

    // setGreen(color === "green");
    // setYellow(color === "yellow");
    // setRed(color === "red");

    return () => clearTimeout(timer);
  }, [color]); // Re-run effect when currentColor changes

  const lights = {
    green: {
      color: "green",
      duration: 3000,
      next: "yellow",
    },
    yellow: {
      color: "yellow",
      duration: 500,
      next: "red",
    },
    red: {
      color: "red",
      duration: 4000,
      next: "green",
    },
  };

  return (
    <div className="py-12 px-6 flex flex-col items-center justify-center space-y-5 bg-gray ">
      {Object.keys(lights).map((light, idx) => (
        <div
          key={idx}
          className={`w-24 h-24 bg-${lights[light].color === color ? lights[light].color : "inactive"} rounded-full`}
        >
          {lights[light].color}
        </div>
      ))}

      {/* <div
        className={
          green
            ? "md:w-24 md:h-24 w-16 h-16 bg-green rounded-full"
            : "md:w-24 md:h-24 w-16 h-16 bg-inactive rounded-full"
        }
      ></div>
      <div
        className={
          yellow
            ? "md:w-24 md:h-24 w-16 h-16 bg-yellow rounded-full"
            : "md:w-24 md:h-24 w-16 h-16 bg-inactive rounded-full"
        }
      ></div>
      <div
        className={
          red
            ? "md:w-24 md:h-24 w-16 h-16 bg-red rounded-full"
            : "md:w-24 md:h-24 w-16 h-16 bg-inactive rounded-full"
        }
      ></div> */}
    </div>
  );
}
