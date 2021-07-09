import React from "react"

//Css
import "./Css/index.css"

import Button from "../Button"

function Banner() {
    return (
        <div className="imageMain">
            <h1>EXPLORE BEYOND HORIZON</h1>
            <h3>Magna mundi referrentur quo, no rebum dignissim qui.</h3>
            <h3>Per quodsi accusata id, agam labores.</h3>
            <Button text="view our work" classButton="primaryButton"/>
        </div>
    )
}

export default Banner