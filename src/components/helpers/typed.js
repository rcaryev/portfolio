import React from "react";
import Typewriter from "typewriter-effect";
const Typed = () => {
  return (
    <div className=" text-orange-600 ml-4">
      {/* <Typewriter
        loop={1}
        cursor
        cursorStyle="_"
        typeSpeed={75}
        deleteSpeed={50}
        delaySpeed={1000}
        words={[
          "Web Designer",
          "Web developer",
          "freelancer",
          "simple pretty boy",
        ]}
      /> */}
      <Typewriter
        options={{
          strings: [
            " Web Designer",
            " Web developer",
            " freelancer",

            "nigga shit",
            "slava ukraine",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Typed;
