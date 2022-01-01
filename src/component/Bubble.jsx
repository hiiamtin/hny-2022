import Confetti from 'react-dom-confetti';
import React, { useState, useEffect } from 'react';
import '../style/Bubble.css';

const delay = 3000;
const config = {
  angle: 90,
  spread: "60",
  startVelocity: "50",
  elementCount: 70,
  dragFriction: "0.11",
  duration: delay,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "1000px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

const Buble = () => {
  const [active, setActive] = useState(0);
  const [show, setShow] = useState(false);

  const confettiHandle = () => {
    if (!show)
      setActive(active + 1)
  }
  useEffect(() => {
    if (active > 0) {
      setShow(true)
      let timer1 = setTimeout(() => setShow(false), delay);
      return () => {
        clearTimeout(timer1);
      };
    }
  }, [active]);

  return (
    <div className='bubble-container'>
      <button onClick={confettiHandle}>test</button>
      <Confetti active={show} config={config} />
      {active.toString()},{show.toString()}
    </div>
  )
}

export default Buble
