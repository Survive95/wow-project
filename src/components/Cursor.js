import React, { useEffect, useState } from 'react'

function Cursor() {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        addEventListeners();
        return () => removeEventListeners();
    }, []);

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
    };

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
    };

    const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <div style={{left: `${position.x}px`, top: `${position.y}px`}} className="cursor"></div>
    )
}

export default Cursor