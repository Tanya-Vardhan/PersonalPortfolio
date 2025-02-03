import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = [
    "Hello, I'm Tanya",
    "Hola, soy Tanya",
    "Hallo, ich bin Tanya",
    "Bonjour, je suis Tanya",
    "Merhaba, ben Tanya",
  ];
  
  const [currenText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(1);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }

      if (endValue > texts[index].length + 10) {
        setIsForward(false);
      }

      if (endValue < 2) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length);  // ✅ Corrected index update
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index, texts]);

  return <div className="transition ease duration-300">{currenText}</div>;
};

export default TextChange;
