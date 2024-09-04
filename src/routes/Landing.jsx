import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MobileLinks from "../components/MobileLinks";
import { Divider, Grid, styled, Typography, useTheme } from "@mui/material";
import JobTimeline from "../components/JobTimeLine";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import MyCurrentTechnologies from "../components/MyCurrentTechnologies";
import CurrentlyLearning from "../components/CurrentlyLearning";
import Footer from "../components/Footer";
import Links from "../components/Links";
import { useMediaQueries } from "../utils/hooks/useMediaQueries";

const LandingContainer = styled(Grid)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingLeft: "20rem",
  paddingRight: "20rem",
  [theme.breakpoints.down("xl")]: {
    paddingLeft: "10rem",
    paddingRight: "10rem",
  },
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "5rem",
    paddingRight: "5rem",
  },
  [theme.breakpoints.down("md")]: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
}));

const StyledDivider = ({ label }) => {
  return (
    <Divider
      sx={{
        width: "100%",
        "&::before, &::after": {
          borderColor: "white",
          borderWidth: ".1px",
        },
      }}
      textAlign="center"
      children={<Typography variant="h6" color="white" children={label} />}
    />
  );
};

const Landing = () => {
  const mediaQuery = useMediaQueries();
  return (
    <LandingContainer container id="landing.container">
      <Grid container item xs={12}>
        <Header />
      </Grid>
      <Grid container item xs={12} sx={{ justifyContent: "center" }}>
        {mediaQuery.isMd ? <MobileLinks /> : <Links />}
      </Grid>
      <Grid container item xs={12}>
        <StyledDivider label="Me" />
        <AboutMe />
      </Grid>
      <Grid container item xs={12}>
        <StyledDivider label="Experience" />
        <JobTimeline />
      </Grid>
      <Grid container item xs={12}>
        <StyledDivider label="Projects" />
        <Projects />
      </Grid>
      <Grid container item xs={12}>
        <StyledDivider label="My Current Tech Stack" />
        <MyCurrentTechnologies />
      </Grid>
      <Grid container item xs={12}>
        <StyledDivider label="Always Learning" />
        <CurrentlyLearning />
      </Grid>
      <Grid container item xs={12}>
        <Footer />
      </Grid>
    </LandingContainer>
  );
};

export default Landing;
