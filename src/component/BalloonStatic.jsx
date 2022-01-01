import React, { useState } from "react";
import Confetti from 'react-dom-confetti';
import "../style/Balloon.css";
import '../style/Bubble.css';

function random(num) {
    return Math.floor(Math.random() * num)
}

function getRandomStyles() {
    var r = random(255);
    var g = random(255);
    var b = random(255);
    return {
        backgroundColor: `rgba(${r},${g},${b},1)`,
        color: `rgba(${r},${g},${b},1)`,
        boxShadow: `inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},1)`,
    }
}

const delay = 3000;
const config = {
    angle: 90,
    spread: "196",
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: delay,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };

export default function BalloonStatic(props) {
    const message = props.message
    const balloonArr = Array(props.count)
    .fill()
    .map((_, i) => ({ id: i, popped: false, showed: false, style: getRandomStyles(), message:message[i%2]}));
    const [balloons, setBalloons] = useState(balloonArr);

    const setShow = (index, value) => {
        setBalloons((balloons) => {
            const b = [...balloons];
            b[index].showed = value;
            return b;
        });
    }
    const setPop = (index, value) => {
        setBalloons((balloons) => {
            const b = [...balloons];
            b[index].popped = value;
            return b;
        });
    }
    const onPop = (index) => {
        setShow(index, true);
        setTimeout(() => {
            setPop(index, true)
        }, 100);
        setTimeout(() => {
            setShow(index, false)
        }, 1000);
        console.log(balloons,props,message,message.length)
    };

    return (
        <div className="balloon-static-container">
            {balloons.map((b, i) => {
                if (!b.popped || b.showed) {
                    return (
                        <div>
                            <div
                                key={b.id}
                                className="balloon-static"
                                style={b.style}
                                onClick={() => onPop(i)}
                                hidden={b.popped}
                            >
                            </div>
                            <div className='bubble-container'>
                                <Confetti active={b.showed} config={config} />
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
}