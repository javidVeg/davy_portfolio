import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material"

const LinkContainer = styled(Grid)({
  position: "absolute",
  top: "0",
  right: "0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "50%",
    padding: "10px",
});

const CircleButton = styled("div")({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  border: "1px solid #887bad",
  textDecoration: "none",
  // backgroundColor: '#9c93bf',
});

const LinkIcon = ({ children, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <>{children}</>
    </a>
  );
};

const Links = () => {
  console.log("Links");
  return (
    <LinkContainer item gap={3}>
      <LinkIcon
        url="https://www.google.com"
        children={<GitHubIcon sx={{ color: "white" }} />}
      />
      <LinkIcon
        url="https://www.google.com"
        children={<LinkedInIcon sx={{ color: "white" }} />}
      />
      <LinkIcon
        url="https://www.google.com"
        children={<EmailIcon sx={{ color: "white" }} />}
      />
      <LinkIcon
        url="https://www.google.com"
        children={<NewspaperIcon sx={{ color: "white" }} />}
      />
    </LinkContainer>
  );
};

export default Links;
