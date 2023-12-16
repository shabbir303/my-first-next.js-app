"use client"

import Counter from "@/Components/Counter/Counter";
import { useState } from "react";

const HomePage = () => {
  
  // client side e porinto kore client rendering korte parbo
  // browser e sobkicu dekhar jonno next.js e client e porinoto korte hobe
  // ejonno "use client" use korte hobe ekbare top e 
  return (
    <div>
      <h1>Hello world</h1>
      <Counter></Counter>
    </div>
  );
};

export default HomePage;