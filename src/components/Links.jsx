import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const LinkContainer = styled(Grid)(({ theme }) => ({
  position: "absolute",
  top: "0",
  right: "0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "50%",
  paddingTop: "20px",
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

const LinkIcon = ({ children, url, isemail }) => {
  const linkUrl = isemail ? `mailto:${url}` : url;

  return (
    <a
      href={linkUrl}
      target={isemail ? "_self" : "_blank"}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

const Links = () => {
  console.log("Links");
  return (
    <LinkContainer item gap={3}>
      <LinkIcon
        url={import.meta.env.VITE_REACT_APP_GITHUB_URL}
        children={<GitHubIcon sx={{ color: "white" }} />}
      />
      <LinkIcon
        url={import.meta.env.VITE_REACT_APP_LINKED_IN}
        children={<LinkedInIcon sx={{ color: "white" }} />}
      />
      <LinkIcon
        url={import.meta.env.VITE_REACT_EMAIL}
        children={<EmailIcon sx={{ color: "white" }} />}
        isemail={true}
      />
      <LinkIcon
        url={import.meta.env.VITE_REACT_APP_RESUME_URL}
        children={<NewspaperIcon sx={{ color: "white" }} />}
      />
    </LinkContainer>
  );
};

export default Links;
