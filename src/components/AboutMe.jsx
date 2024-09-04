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
            children="As a Frontend Engineer with over 4 years of experience, currently working in medtech, I specialize in building impactful web applications. I take projects from concept to completion, focusing on user-friendly designs and collaborating effectively with cross-functional teams. Skilled in React, JavaScript, Node, and Google GCP, I've successfully boosted user engagement and streamlined processes, delivering solutions that meet client needs. I'm always eager to learn and tackle new challenges with a practical, problem-solving mindset."
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
