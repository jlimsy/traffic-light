import TrafficLight from "./TrafficLight";

export default function App() {
  return (
    <div className="h-screen lg:bg-gradient-to-b lg:from-sky lg:to-white bg-gradient-to-b from-sky/80 to-black">
      <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 border rounded-xl top-1/2 left-1/2 overflow-hidden">
        <TrafficLight />
      </div>
    </div>
  );
}
