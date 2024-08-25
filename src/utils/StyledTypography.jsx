import { styled, Typography } from "@mui/material"

export const TypographyComputerEffect = styled(Typography)({
    color: 'green',
    fontFamily: 'monospace',
    fontSize: '20px',
    // transform: 'scale(2)',  
    textShadow: `
      0 0 1px #00ff00,
      0 0 1px #00ff00,
      0 0 20px #00ff00`,   
    whiteSpace: 'pre-wrap',  
})