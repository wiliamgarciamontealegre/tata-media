import React from "react"
import { Container, Grid } from '@material-ui/core';

//Header
import Header from "./Components/Header"

//Banner principal inicio
import Banner from "./Components/Banner"

//Galeria de imagenes
import GalleryImage from "./Components/GalleryImage"

//Footer
import Footer from "./Components/Footer"

function App() {
  return (
    <Container >
      <Grid container spacing={3}>

        <Grid item xs={1} />
        <Grid item xs={10}>
          <Header />
        </Grid>

        <Grid item xs={12}>
          <Banner />
        </Grid>

        <Grid item xs={1} />
        <Grid item xs={10}>
          <GalleryImage />
        </Grid>

        <Grid item xs={12}>
          <Footer />
        </Grid>

      </Grid>
    </Container>
  );
}

export default App;
