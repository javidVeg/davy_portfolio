import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import ProjectCard from "../utils/components/ProjectCard";
import Masonry from "@mui/lab/Masonry";

const projects = [
  {
    title: "Virtual Front Door",
    locked: true,
    technologies: [
      "Vite (React)",
      "Flutter BloC",
      "MUI",
      "Node.js",
      "Google - GCP",
    ],
    description:
      "A virtual front door application for our demo clinic to showcase new features and products. This application utilized a Node.js backend to serve dynamic environment variables, enhance security, and improve caching.",
  },
  {
    title: "Intake Chat Application",
    locked: true,
    technologies: ["Vite (React)", "Zustand", "MUI", "Socket.io"],
    description:
      "A real-time chat application with AI to streamline patient intake and improve data accuracy.",
  },
  {
    title: "Clinical Hub Scheduler and Registerer",
    locked: true,
    technologies: ["React", "Flutter BloC", "MUI", "Go (Gin)", "Google - GCP"],
    description:
      "An application for patient scheduling and registration, compatible with EHR systems like Athena and eCW. This application optimized clinical workflows, reducing wait times and improving staff productivity.",
  },
  {
    title: "Component Library for Consumer Apps",
    locked: true,
    technologies: ["Vite (React)", "Flutter BloC", "MUI", "Google - GCP"],
    description:
      "A modular component library to standardize and streamline consumer app development, ensuring consistency and reusability across projects.",
  },
  {
    title: "Portfolio Website",
    locked: true,
    technologies: ["Vite (React)", "Material-UI"],
    description:
      "A simple personal portfolio website to introduce myself and showcase my projects and skills.",
  },
];

const Projects = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleExpandClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <Box sx={{ width: "100%", padding: "1rem", overflow: 'hidden' }}>
      <Masonry
        sx={{
          marginLeft: "1px",
          width: "100%",
          overflow: "hidden",
        }}
        columns={{ xs: 1, sm: 2, md: 3 }}
        spacing={2}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            technologies={project.technologies}
            description={project.description}
            isExpanded={expandedCard === index}
            onExpandClick={() => handleExpandClick(index)}
          />
        ))}
      </Masonry>
    </Box>
  );
};

export default Projects;
