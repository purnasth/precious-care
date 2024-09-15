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
          src="https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?cs=srgb&dl=pexels-pixabay-265906.jpg&fm=jpg"
          alt=""
          className="w-full h-screen object-cover"
        />
      </section>
    </>
  );
};

export default App;
