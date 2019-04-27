import React from 'react'
import BlueBg from '../../img/blueGrandientBg.png'

const BlueBackground = {
    backgroundImage: `url(${BlueBg})`,
};

export default function Title({ name, title }) {
    return (
        <div className="section ItemHeader" style={BlueBackground}>
            <h1 className="text-capitalize font-weight-bold" align="center">
                {name} <strong className="blue-text">{title}</strong>
            </h1>
        </div>
    )
}
