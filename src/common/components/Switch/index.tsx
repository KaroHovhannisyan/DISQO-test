import React from "react";
import "./Switch.styles.scss"

interface IProps {
}

const Switch: React.FC<IProps> = ({}) => {
    return (
        <main>
        <div className="item">
            <h3>Private</h3>
            <input type="checkbox"/>
        </div>
        </main>
    )
};


export default Switch;