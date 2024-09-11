import { Grid, styled, Typography } from "@mui/material";
import React from "react";

const HeaderContainer = styled(Grid)({
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  textAlign: "flex-start",
  margin: "20px",
});

const HeaderTextName = styled(Typography)(({ theme }) => ({
  position: "relative",
  fontWeight: 400,
  fontFamily: "Alice, serif",
  fontStyle: "normal",
  fontSize: "10em",
  lineHeight: "1em",
  color: "transparent",
  background: "radial-gradient(circle, #8e6fed 0%, #d72a7d 100%)",
  backgroundSize: "600% 600%",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  animation: "gradient-animation 10s ease-in-out infinite",

//   "&::after": {
//     content: "attr(data-text)",
//     position: "absolute",
//     top: 0,
//     left: 0,
//     color: "transparent",
//     background: "inherit",
//     backgroundClip: "text",
//     WebkitBackgroundClip: "text",
//     filter: "blur(22px)",
//     opacity: .9,
//     zIndex: -1,
//   },

  "@keyframes gradient-animation": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "4.5em",
  },
}));

const HeaderTextSub = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: "400",
  fontStyle: "normal",
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5em",
  },
}));

const Header = () => {
  return (
    <HeaderContainer item xs={12} id="header.container">
      <HeaderTextSub variant="h3">Hiya! Im</HeaderTextSub>
      <HeaderTextName data-text="DAVY ANDREA">DAVY ANDREA</HeaderTextName>
      <HeaderTextSub variant="h3">
        a software engineer with a passion for frontend.
      </HeaderTextSub>
    </HeaderContainer>
  );
};

export default Header;
