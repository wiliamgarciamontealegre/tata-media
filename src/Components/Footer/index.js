import { Grid } from '@material-ui/core';


import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';

import "./Css/index.css"

export default function Footer() {
    return (
        <Grid item xs={12} className="footerStyle">
            <h6>2016 - <span>Sneak</span> All Right Reserved</h6>
            <ul>
                <li><FacebookIcon /></li>
                <li><InstagramIcon /></li>
                <li><TwitterIcon /></li>
                <li><PinterestIcon /></li>
            </ul>
        </Grid>
    )
}