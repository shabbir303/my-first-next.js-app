"use client"

import Counter from "@/Components/Counter/Counter";
import { Bentham } from "next/font/google";
import Link from "next/link";
import { useState } from "react";


// export const metadata = {
//   title: 'Home',
//   description: 'This is home page',
// };

const HomePage = () => {
  
  // client side e porinto kore client rendering korte parbo
  // browser e sobkicu dekhar jonno next.js e client e porinoto korte hobe
  // ejonno "use client" use korte hobe ekbare top e 
  return (
    <div>
      <h1>Hello world</h1>
      <Counter></Counter>
      <Link href="about">
      <button className="btn btn-outline btn-success">
        About
      </button>
      </Link>
      {/* prefetch kore rakhar karone suddenly hoe jai */}
    </div>
  );
};

export default HomePage;