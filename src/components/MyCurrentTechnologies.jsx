import React from "react";
import {
  Typography,
  Grid,
  Stack,
  useTheme,
} from "@mui/material";

const techCategories = [
  {
    category: "Frontend",
    subjects: [
      "React",
      "Material-UI",
      "Redux Toolkit",
      "Format.js (React Intl)",
      "Tailwind CSS",
      "Next.js",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "State Management",
    subjects: [
      "Redux",
      "Redux Toolkit",
      "Flutter BLoC",
      "Zustand",
      "React Context",
    ],
  },
  {
    category: "Backend",
    subjects: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Firebase",
      "MongoDB",
      "Mongoose",
      "MySQL",
    ],
  },
  {
    category: "Cloud, Infrastructure & CI/CD",
    subjects: ["Docker", "Google GCP"],
  },
  {
    category: "Monitoring & Analytics",
    subjects: ["Heap", "Google Analytics"],
  },
  {
    category: "Version Control",
    subjects: ["Git", "GitHub"],
  },
  {
    category: "Testing",
    subjects: ["Jest", "React Testing Library", "Postman"],
  },

  {
    category: "Project Management",
    subjects: ["Jira", "Confluence", "Trello", "Miro"],
  },
];

const MyCurrentTechnologies = () => {
  const theme = useTheme();
  return (
    <Grid item xs={12} p="16px">
      <Stack
      gap={2}
        flexDirection="column"
        alignItems="flex-start"
        flexWrap="wrap"
      >
        {techCategories.map((techCategory, index) => (
          <Stack
          gap={1}
            key={index}
            flexDirection="row"
            alignContent="center"
            flexWrap="wrap"
            alignItems="center"
          >
            <Typography variant="body1" color={"primary"} mr="20px">
              {techCategory.category}:
            </Typography>
            <Typography variant="body2" color="white">
              {techCategory.subjects.join(", ")}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Grid>
  );
};

export default MyCurrentTechnologies;
