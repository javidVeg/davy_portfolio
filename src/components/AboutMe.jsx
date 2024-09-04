import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import Selfie from "../assets/davy_selfie.png";

const HeartImage = styled("img")({
  width: "300px",
  height: "300px",
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
            children="As a Frontend Engineer with over 4 years of hands-on experience, I focus on creating impactful web applications. I thrive in taking projects from concept to completion, prioritizing intuitive, user-friendly designs, and effective collaboration with cross-functional teams. I am skilled in React, Javascript, Node and Google GCP, and I’ve had success in boosting user engagement, streamlining processes, and delivering solutions that truly meet client needs. I’m always eager to learn and tackle new challenges, bringing a practical, problem-solving approach to every project I work on."
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
          alignItems: "center",
        }}
        children={<HeartImage src={Selfie} alt="davy selfie" />}
      />
    </Grid>
  );
};

export default AboutMe;
