import React, { useState } from "react";
import "../style/Balloon.css";

function random(num) {
    return Math.floor(Math.random() * num)
}

function getRandomStyles() {
    var r = random(255);
    var g = random(255);
    var b = random(255);
    var mt = random(200);
    var ml = random(95);
    var dur = random(5) + 5;
    return {
        backgroundColor: `rgba(${r},${g},${b},0.7)`,
        color: `rgba(${r},${g},${b},0.7)`,
        boxShadow: `inset -7px -3px 10px rgba(${r-10},${g-10},${b-10},0.7)`,
        margin: `${mt}px 0 0 ${ml}%`,
        animation: `float ${dur}s ease-in infinite`,
    }
}


const balloonArr = Array(25)
    .fill()
    .map((_, i) => ({ id: i, popped: false, style: getRandomStyles() }));

export default function Balloon() {
    const [balloons, setBalloons] = useState(balloonArr);

    // const onPop = (index) => {
    //     setBalloons((balloons) => {
    //         const b = [...balloons];
    //         b[index].popped = true;
    //         return b;
    //     });
    // };

    return (
        <div className="balloon-container">
            {balloons.map((b, i) => {
                if (!b.popped) {
                    return (
                            <div
                                key={b.id}
                                className="balloon"
                                style={b.style}
                            >
                        </div>
                    );
                }
            })}
        </div>
    );
}