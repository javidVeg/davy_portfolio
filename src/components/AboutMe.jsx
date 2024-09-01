import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import Selfie from "../assets/davy_selfie.png";

const HeartImage = styled("img")({
  width: "300px",
  paddingBottom: "1rem",
});

const AboutMe = () => {
  return (
    <Grid
      item
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <Grid
        item
        xs={12}
        md={8}
        padding="1rem"
        children={
          <Typography
            py="2rem"
            color="white"
            children="Aliquip dolore dolore ut ipsum cillum duis minim consectetur excepteur ad
      amet. Do eu sit exercitation sint veniam ut fugiat adipisicing qui. Tempor
      adipisicing sunt ullamco nulla fugiat ex esse quis.Duis exercitation est in ut aliqua commodo aute. Tempor ullamco eu tempor qui cupidatat in qui sit consequat ipsum duis. Officia exercitation sint pariatur anim ex. Cupidatat mollit dolor tempor in id eiusmod elit. Culpa et eu est esse in dolore magna anim amet. Officia eu consequat qui adipisicing veniam et pariatur. Velit esse enim id enim id ex deserunt fugiat."
          />
        }
      />
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
        children={<HeartImage src={Selfie} alt="davy selfie" />}
      />
    </Grid>
  );
};

export default AboutMe;
