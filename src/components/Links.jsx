import React from "react"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import NewspaperIcon from "@mui/icons-material/Newspaper"
import styled from "@emotion/styled"
import { Link } from "react-router-dom"

const LinkContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "50%",
  padding: "20px",
  margin: "20px",
})

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
  
  const LinkIcon = ({ children, url }) => {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <CircleButton>
          {children}
        </CircleButton>
      </a>
    );
  }

const Links = () => {
  return (
    <LinkContainer>
      <LinkIcon url="https://www.google.com" children={<GitHubIcon sx={{color: 'white'}} />} />
      <LinkIcon url="https://www.google.com" children={<LinkedInIcon sx={{color: 'white'}}/>} />
      <LinkIcon url="https://www.google.com" children={<EmailIcon sx={{color: 'white'}}/>} />
      <LinkIcon url="https://www.google.com" children={<NewspaperIcon sx={{color: 'white'}}/>} />
    </LinkContainer>
  )
}

export default Links
