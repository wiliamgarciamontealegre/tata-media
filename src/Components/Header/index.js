import React, { Fragment, useEffect } from "react"
import logo from "../../Assets/Img/logo.png"
import { Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
//Css
import "./Css/index.css"

function Header() {

   

    return (
        <Fragment >
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <img src={logo} className="logo" />
                </Grid>
                
                <Grid item xs={12} sm={8}>
                    <ul className="itemsMenu ">
                        <li>All</li>
                        <li>Brading</li>
                        <li>Web</li>
                        <li>Photography</li>
                        <li>App</li>
                    </ul>
                </Grid>
            </Grid>

        </Fragment>
    )
}

export default Header