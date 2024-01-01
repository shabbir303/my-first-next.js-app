import Image from "next/image";
import React from "react";
import newImg from "@/assets/1st.jpg"
const Album = () => {
  return (
    <div>
        <h1>Using Image component</h1>
      <Image
        src="https://github.com/shabbir303/Task_mangagement_client/blob/main/src/assets/1st.jpg?raw=true"
        height={400}
        width={500}
        alt="bg-image"
      />
      <h1>Import Image</h1>
      <Image src={newImg}
        height={400}
        width={500}
        alt="bg-image"/>
    </div>
  );
};

export default Album;
