import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  styled,
  Paper,
  AccordionSummary,
  AccordionDetails,
  Accordion,
  useTheme,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";

const ProjectCard = ({
  title,
  technologies,
  description,
  isExpanded,
  onExpandClick,
}) => {

const theme = useTheme();
  return (
    <Card
      sx={{
        width: "100%",
        backgroundColor: "#171717",
        border: ".5px solid rgba(142, 111, 237, 0.2)",
        transition: "height 0.3s ease",
        minHeight: "150px",
      }}
    >
      <CardContent sx={{ padding: "16px !important" }}>
        <Typography color="white" variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="caption" color="orange">
          Private Repo 🔒{" "}
        </Typography>
        <Typography color="white">
          {technologies.join(", ")}
        </Typography>
        <Accordion
          sx={{
            backgroundColor: "#171717",
            "&::before, &::after": {
              backgroundColor: "transparent",
            },
            transition: "height 0.3s ease",
          }}
          elevation={0}
          expanded={isExpanded}
          onChange={onExpandClick}
        >
          <AccordionSummary
            sx={{
              padding: "0px",
              minHeight: "1rem",
              "&.Mui-expanded": {
                minHeight: "unset",
              },
            }}
            expandIcon={<ExpandMore color="primary" />}
          >
            {!isExpanded && (
              <Typography color="primary" variant="body2">
                Read More
              </Typography>
            )}
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "0px" }}>
            <Typography color={theme.palette.primary[200]} variant="body2">
              {description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
