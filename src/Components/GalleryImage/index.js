import React, { Fragment, useState } from "react"

//Core material UI
import { Grid } from '@material-ui/core';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
//Css
import "./Css/index.css"

//Imagenes
import { images, itemsFilter } from "./Images"

import Button from "../Button"


function GalleryImage() {
    //Almacenamos las imagenes de la galeria
    const [data, setDta] = useState(images)

    //Numero de imagenes a ver
    const [number, setNumber] = useState(6)

    //Numero de columas par las imagenes 
    const [numberColumn, setNumberColumn] = useState(4)

    //filtramos las imagenes
    function filterImage(info) {
        let dataFilter = images;
        if (info !== "All") {
            dataFilter = images.filter(item => item.filter === info);
        }
        setDta(dataFilter)
    }

    //Obtenemos mas resultados de las imagenes
    function getShowMore() {
        setNumber(number + 3)
    }

    //Organizamos el width de las imagenes
    function order(numer){
        setNumberColumn(numer)
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} className="orderGallery">
                <ViewModuleIcon  onClick={() => order(4)}/>
                <ViewStreamIcon   onClick={() => order(6)}/>
            </Grid>
            <Grid item xs={12}>
                <ul className="itemsMenu menuCenter" >
                    {itemsFilter.map((item, key) => {
                        return (
                            <li onClick={() => filterImage(item)} key={key}>{item}</li>

                        )
                    })}
                </ul>
            </Grid>
            {data.slice(0, number).map((item, key) => {
                return (
                    <Grid item xs={12} sm={6} md={numberColumn} key={key}>
                        <div className="imageBackground" style={{ backgroundImage: `url(${item.img})` }}></div>
                    </Grid>
                )
            })}
            {number <= data.length &&
                <Button text="show more" click={getShowMore} classButton="backgroundButton" />
            }

        </Grid>

    )
}

export default GalleryImage

