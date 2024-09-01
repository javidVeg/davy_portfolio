import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Links from "../components/Links";
import { Divider, Grid, styled, Typography, useTheme } from "@mui/material";
import JobTimeline from "../components/JobTimeLine";
import AboutMe from "../components/AboutMe"

const LandingContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingLeft: "5rem",
  paddingRight: "5rem",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
}));

const StyledDivider = ({label}) => {
  return (
    <Divider
      sx={{
        width: "100%",
        "&::before, &::after": {
          borderColor: "white",
          borderWidth: '.1px',
        },
      }}
      textAlign="center"
      children={
        <Typography variant="h6" color="white" children={label}/>
      }
    />
  );
};

const Landing = () => {
  return (
    <LandingContainer container id="landing.container">
      <Grid container item xs={12}>
        <Header />
      </Grid>
      <Grid container item xs={12}>
        <Links />
      </Grid>
      <Grid container item xs={12}>
        <StyledDivider label="Me" />
        <AboutMe />
      </Grid>
      <Grid container item xs={12}>
        <StyledDivider label="Experience" />
        <JobTimeline />
      </Grid>
    </LandingContainer>
  );
};

export default Landing;
