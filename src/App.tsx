import React from "react";
// import Display from "./components/Display";
import Navbar from "./components/ui/Navbar";

const App: React.FC = () => {
  return (
    <>
      {/* <Display /> */}
      <Navbar />
      <section>
        <img
          src="https://images.wondershare.com/virtulook/articles/jewelry-photography-at-home-1.jpg"
          alt=""
          className="w-full h-screen object-cover"
        />
      </section>
    </>
  );
};

export default App;
