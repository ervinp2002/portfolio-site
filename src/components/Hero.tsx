import React, { ReactElement } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

interface Props {}

export function Hero({}: Props): ReactElement {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Ervin!", "something", "something-else"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="gold" />
      </h1>
    </div>
  );
}

export default Hero;
