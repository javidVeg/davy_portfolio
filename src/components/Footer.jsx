import React, { useEffect, useState } from "react";
import { Grid, Typography, useTheme } from "@mui/material";

const techQuotes = [
  {
    id: 1,
    quote:
      "Technology is nothing. What’s important is that you have a faith in people, that they’re basically good and smart, and if you give them tools, they’ll do wonderful things with them.",
    author: "Steve Jobs (1994)",
  },
  {
    id: 2,
    quote: "It's very easy to be different, but very difficult to be better.",
    author: "Jony Ive (2012)",
  },
  {
    id: 3,
    quote: "Technology should serve humanity, not the other way around.",
    author: "Tim Cook (2019)",
  },
  {
    id: 4,
    quote:
      "We’ve gone from a world where people waited to be invited to participate to one where anyone can invent, iterate, and innovate.",
    author: "Lynn Conway (2006)",
  },
  {
    id: 5,
    quote:
      "Simplicity is not the absence of clutter, that's a consequence of simplicity. Simplicity is somehow essentially describing the purpose and place of an object and product.",
    author: "Jony Ive (2013)",
  },
  {
    id: 6,
    quote:
      "Simplicity is not the absence of clutter, that's a consequence of simplicity. Simplicity is somehow essentially describing the purpose and place of an object and product.",
    author: "Jony Ive (2013)",
  },
  {
    id: 7,
    quote: "The best ideas start as conversations.",
    author: "Jony Ive (2014)",
  },
  {
    id: 8,
    quote:
      "We are constantly taking a very critical eye to what we’ve done and asking how we can make it better.",
    author: "Jony Ive (2015)",
  },
  {
    id: 9,
    quote:
      "There’s a revolution going on in the digital world today, and it’s creating a new breed of digital designers and engineers who will shape the future.",
    author: "Lynn Conway (2002)",
  },
  {
    id: 10,
    quote:
      "The ability to imagine the unseen is the power behind great technology.",
    author: "Lynn Conway (2010)",
  },
];

const Footer = () => {
  const [quote, setQuote] = useState({});
  const theme = useTheme();
  const emoji =
    "https://firebasestorage.googleapis.com/v0/b/davy-andrea-portfolio.appspot.com/o/emoji.png?alt=media&token=13ea8129-09d3-41cb-807d-ee2084baf0f6";

  useEffect(() => {
    const randomQuote =
      techQuotes[Math.floor(Math.random() * techQuotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <Grid
      container
      item
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Grid
        item
        sx={(theme) => ({
          padding: "10rem",

          [theme.breakpoints.down("md")]: {
            padding: "5rem 1rem",
          },
        })}
      >
        <Typography
          variant="h6"
          color={theme.palette.primary[300]}
          align="center"
          children={quote.quote}
        />
        <Typography
          variant="body1"
          color={theme.palette.primary[300]}
          align="center"
          fontStyle="italic"
          children={quote.author}
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
          src={emoji}
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
