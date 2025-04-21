import React from "preact/compat";
import "./app.css";
import Navbar from "./components/NavBar";
import HeroContent from "./components/HeroContent";

const App = () => {
  return (
    <div className="background">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="firefly" />
      ))}
      <div className="flex items-center justify-center h-full text-white text-3xl">
        <Navbar />

        <section>
          <HeroContent/>
        </section>
      </div>
    </div>
  );
};

// Export App as the default export
export default App;
