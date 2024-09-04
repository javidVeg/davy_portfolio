import React from "react"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import NewspaperIcon from "@mui/icons-material/Newspaper"
import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { Grid } from "@mui/material"

const LinkContainer = styled(Grid)(({theme}) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  alignContent: "center",
  width: "70%",
  padding: "20px",
  // margin: "20px",
  [theme.breakpoints.down('sm')]: {
    width: "100%",
  }
}))

const CircleButton = styled('div')({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px', 
    height: '50px',
    borderRadius: '50%',
    border: '1px solid #887bad',
    textDecoration: 'none',
    // backgroundColor: '#9c93bf',
    
  });
  
  const LinkIcon = ({ children, url, isemail }) => {
    const linkUrl = isemail ? `mailto:${url}` : url;
  
    return (
      <a href={linkUrl} target={isemail ? "_self" : "_blank"} rel="noopener noreferrer">
        <CircleButton>
          {children}
        </CircleButton>
      </a>
    );
  }

const MobileLinks = () => {
  console.log('MobileLinks')
  return (
    <LinkContainer item container>
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
  )
}

export default MobileLinks
