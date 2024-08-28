import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import { TypographyComputerEffect } from "../utils/StyledTypography";
import { useMediaQueries } from "../utils/hooks/useMediaQueries";
import { TypingEffectContainer } from "../utils/StyledContainers";
import EnterKeyListener from "../utils/EnterKeyListener";
import styled from "@emotion/styled";

const TypingEffect = ({ lines, typingSpeed = 50, linePause = 500 }) => {
  const [currentText, setCurrentText] = useState("");
  const [previousText, setPreviousText] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const mediaQuery = useMediaQueries();
  const navigate = useNavigate();

  const ArtContainer = styled("pre")({
    fontFamily: "monospace",
    color: "#00ff00",
    whiteSpace: "pre",
    fontSize: mediaQuery.isSm ? "5px" : "10px",
  });

  useEffect(() => {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + lines[lineIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);

        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCharIndex(0);
          setCurrentText("");
          setPreviousText((prev) => [...prev, lines[lineIndex]]);
          setLineIndex((prev) => prev + 1);
        }, linePause);

        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, lineIndex, lines, typingSpeed, linePause]);

  return (
    <TypingEffectContainer container>
      <Grid
        gap={3}
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          alignItems: "flex-start",
          alignContent: "center",
        }}
      >
        <ArtContainer>
          {`
▓█████▄     ▄▄▄          ██▒   █▓   ▓██   ██▓     ██████                 
▒██▀ ██▌   ▒████▄       ▓██░   █▒    ▒██  ██▒   ▒██    ▒                 
░██   █▌   ▒██  ▀█▄      ▓██  █▒░     ▒██ ██░   ░ ▓██▄                   
░▓█▄   ▌   ░██▄▄▄▄██      ▒██ █░░     ░ ▐██▓░     ▒   ██▒                
░▒████▓     ▓█   ▓██▒      ▒▀█░       ░ ██▒▓░   ▒██████▒▒                
 ▒▒▓  ▒     ▒▒   ▓▒█░      ░ ▐░        ██▒▒▒    ▒ ▒▓▒ ▒ ░                
 ░ ▒  ▒      ▒   ▒▒ ░      ░ ░░      ▓██ ░▒░    ░ ░▒  ░ ░                
 ░ ░  ░      ░   ▒           ░░      ▒ ▒ ░░     ░  ░  ░                  
   ░             ░  ░         ░      ░ ░              ░                  
 ░                           ░       ░ ░                                 
 ██▓███   ▒█████   ██▀███  ▄▄▄█████▓  █████▒▒█████   ██▓     ██▓ ▒█████  
▓██░  ██▒▒██▒  ██▒▓██ ▒ ██▒▓  ██▒ ▓▒▓██   ▒▒██▒  ██▒▓██▒    ▓██▒▒██▒  ██▒
▓██░ ██▓▒▒██░  ██▒▓██ ░▄█ ▒▒ ▓██░ ▒░▒████ ░▒██░  ██▒▒██░    ▒██▒▒██░  ██▒
▒██▄█▓▒ ▒▒██   ██░▒██▀▀█▄  ░ ▓██▓ ░ ░▓█▒  ░▒██   ██░▒██░    ░██░▒██   ██░
▒██▒ ░  ░░ ████▓▒░░██▓ ▒██▒  ▒██▒ ░ ░▒█░   ░ ████▓▒░░██████▒░██░░ ████▓▒░
▒▓▒░ ░  ░░ ▒░▒░▒░ ░ ▒▓ ░▒▓░  ▒ ░░    ▒ ░   ░ ▒░▒░▒░ ░ ▒░▓  ░░▓  ░ ▒░▒░▒░ 
░▒ ░       ░ ▒ ▒░   ░▒ ░ ▒░    ░     ░       ░ ▒ ▒░ ░ ░ ▒  ░ ▒ ░  ░ ▒ ▒░ 
░░       ░ ░ ░ ▒    ░░   ░   ░       ░ ░   ░ ░ ░ ▒    ░ ░    ▒ ░░ ░ ░ ▒  
             ░ ░     ░                         ░ ░      ░  ░ ░      ░ ░  
                                                                         
`}
        </ArtContainer>
        {previousText.length > 0 &&
          previousText.map((line, index) => (
            <TypographyComputerEffect key={index}>
              {line}
            </TypographyComputerEffect>
          ))}
        <TypographyComputerEffect>{currentText}</TypographyComputerEffect>
        {previousText.length === lines.length && !mediaQuery.isMd && (
          <TypographyComputerEffect sx={{ marginTop: "4rem" }}>
            PRESS ENTER ⏎ TO DOWNLOAD DAVY'S RESUME
          </TypographyComputerEffect>
        )}
        {previousText.length === lines.length && mediaQuery.isMd && (
          <TypographyComputerEffect
            sx={{ marginTop: "2rem" }}
            onClick={() =>
              window.open(import.meta.env.VITE_REACT_APP_RESUME_URL, "_blank")
            }
          >
            PRESS TO VIEW RESUME
          </TypographyComputerEffect>
        )}
      </Grid>
      <EnterKeyListener onEnter={() => navigate("www.google.com")} />
    </TypingEffectContainer>
  );
};

export default TypingEffect;
