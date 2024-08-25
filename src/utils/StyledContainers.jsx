import { Grid, styled } from "@mui/material";

export const CRTComputerContainer = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "rgba(0, 12, 0, 1)",
  width: "100vw",
  height: "100vh",
  paddingTop: "1rem",
}));

export const NoiseOverlayStyle = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: `
      radial-gradient(circle, rgba(255,255,255,0.5) 20%, rgba(0, 12, 0, 0.5) 1%) 0% 0% / 5px 5px,
      radial-gradient(circle, rgba(255,255,255,0.5) 20%, rgba(0, 12, 0, 0.5) 1%) 50% 50% / 5px 5px
    `,
  opacity: 0.1,
  pointerEvents: "none",
  zIndex: 1,
  animation: `static-noise 0.1s steps(10) infinite`,
  "@keyframes static-noise": {
    "0%": {
      backgroundPosition: "0 0, 50% 50%",
    },
    "100%": {
      backgroundPosition: "100% 100%, 150% 150%",
    },
  },
});

export const TypingEffectContainer = styled(Grid)(({ theme }) => ({
  width: "auto",
  height: "100vh",
  margin: "5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  alignContent: "flex-start",
  [theme.breakpoints.down('sm')]: {
    margin: "1rem",
  },

  
}));
