
import React, { useState } from 'react';
import "../styles/Child.css"

function Selection({ key, applyColor }) {
    const [selectionStyle, setSelectionStyle] = useState({ background: '' });

    const handleClick = () => {
        applyColor(setSelectionStyle);
    };

    return (
        <div  style={selectionStyle} onClick={handleClick} className="fix-box">
            <h2 className="subheading">Selection</h2>
        </div>
    )
}

export default Selection;