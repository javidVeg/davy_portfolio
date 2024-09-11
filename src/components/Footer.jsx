import React from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import Emoji from "../assets/emoji.png";

const Footer = () => {
  const theme = useTheme();
  return (
    <Grid container item width="100%">
      <Grid
        item
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
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginBottom: "1em",
        }}
      >
        <img
          src={Emoji}
          alt="emoji"
          style={{ width: "60px", marginRight: "1em" }}
        />
        <Typography
          variant="body1"
          color="white"
          align="center"
          children={`Davy Andrea - ${new Date().getFullYear()}  ©`}
        />
      </Grid>
    </Grid>
  );
};

export default Footer;
