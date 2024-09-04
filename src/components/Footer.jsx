import { Grid, Typography, useTheme } from "@mui/material";
import React from "react";

const Footer = () => {
  const theme = useTheme();
  return (
    <Grid width="100%">
      <Grid
        sx={(theme) => ({
          padding: "10rem",

          [theme.breakpoints.down("md")]: {
            padding: "5rem",
          },
        })}
      >
        <Typography
          variant="h6"
          color={theme.palette.primary[300]}
          align="center"
          children={
            '"No, no, no, no. You gotta listen to the way people talk...."'
          }
        />
        <Typography
          variant="body1"
          color={theme.palette.primary[300]}
          align="center"
          fontStyle="italic"
          children={"Terminator 2: Judgment Day 1991"}
        />
      </Grid>
      <Typography
        variant="body1"
        color="white"
        align="center"
        children={`Davy Andrea - ${new Date().getFullYear()}  ©`}
      />
    </Grid>
  );
};

export default Footer;
