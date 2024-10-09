import React from "react";
import { Grid, styled, Typography } from "@mui/material";

const HeartImage = styled("img")({
  width: "300px",
  height: "300px",
  paddingBottom: "1rem",
});

const AboutMe = () => {

  const img = 'https://firebasestorage.googleapis.com/v0/b/davy-andrea-portfolio.appspot.com/o/davy_selfie_small.png?alt=media&token=1917c3f1-00f1-4005-a989-790948907d7e'

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
        children={<HeartImage src={img} alt="davy selfie" />}
      />
    </Grid>
  );
};

export default AboutMe;
