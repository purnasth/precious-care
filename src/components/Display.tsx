import React from "react";
import logo from "../assets/logo.png";

const Display: React.FC = () => {
  return (
    <main className="w-full h-screen z-50 bg-white">
      <div className="container flex items-center justify-center flex-col gap-12 text-center size-full">
        <img
          src={logo}
          alt="Precious Care Collection"
          className="size-36 rounded-full object-contain bg-dark"
        />
        <h1 className="text-5xl font-luxury">Precious Care Collection</h1>

        <p className="max-w-3xl">
          Jewellery Store in Jyatha Thamel since 2016. Remember for all kinds of
          silver and metal jewellery, semi precious stones at reasonable price
          and quality. Get what u think it is. We give full information on what
          u are buying.
        </p>
      </div>
    </main>
  );
};

export default Display;
