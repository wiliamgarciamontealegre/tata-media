import React from "react"
import PropTypes from 'prop-types';

//Css
import "./Css/index.css"

function Button({ text, classButton, click }) {
    return (
        <button onClick={() => click()} className={"buttonMain " + classButton}>{text}</button>
    )
}
export default Button

Button.propTypes = {
    text: PropTypes.string,
    classButton: PropTypes.string
};