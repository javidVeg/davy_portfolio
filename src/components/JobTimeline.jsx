import React, { useState } from "react";
import {
  Typography,
  Collapse,
  Button,
  styled,
  Grid,
  useTheme,
  Chip,
  Stack,
} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

const JobTimelineContainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "20px",
});

const StyledTimelineOppositeContent = styled(TimelineOppositeContent)({
  color: "white",
  fontSize: ".8em",
  textAlign: "start",
  minWidth: "85px",
});

const StyledTimelineContent = styled(TimelineContent)({
  color: "white",
  textAlign: "start",
  maxWidth: "80vw",
  minWidth: "50vw",
  padding: "0px 12px",
});

const StyledTimeline = styled(Timeline)(({ theme }) => ({}));

const JobTimeline = () => {
  const [expanded, setExpanded] = useState(null);

  const theme = useTheme();

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const jobs = [
    {
      title: "Software Engineer - Frontend",
      company: "Decoded Health",
      current: true,
      details:
        "Spearheaded the development of web-based applications for clinics, integrating key features like Telehealth, appointment management, and infrastructure optimization, while mentoring engineers and driving technical innovation. Maintained strong communication with clients and stakeholders, ensuring alignment with product goals and providing thorough documentation for efficient team operations.",
      timeline: "August 2022 - Present",
    },
    {
      title: "Frontend Developer - Intern",
      company: "Merge",
      current: false,
      details:
        "Translated abstract ideas into scalable frontend code, consistently delivering high-quality results. Achieved these outcomes with minimal supervision, ensuring efficiency and effectiveness in development.",
      timeline: "January 2022 - August 2022",
    },

    {
      title: "Web Developer",
      company: "Freelance",
      current: false,
      details: "Designed, developed, and deployed web applications using HTML, CSS, JavaScript, React, and Node.js, including a non-profit landing page that boosted user engagement by 50% and a React app for a salon that increased online traffic. ",
      timeline: "January 2020 - December 2021",
    },

    {
      title: "Congressional Travel Escort - Staff Sergeant",
      company: "Office of the Chief Legislative Liaison - U.S. Army",
      current: false,
      details: "Organized and facilitated secure international travel for Congressional delegations, managing logistics and ensuring safe escort to meetings with foreign leaders across various countries.",
      timeline: "January 2020 - September 2023",
    },

    {
      title: "Infantryman - Staff Sergeant",
      company: "Platoon Sergeant - U.S. Army",
      current: false,
      details: "Led infantry units in overseas deployments and training exercises, applying military tactics to achieve mission objectives. Delivered training programs and mentored Senior Non-Commissioned Officers in Malawi, Africa, demonstrating strong leadership and instructional skills.",
      timeline: "January 2012 - January 2020",
    },
  ];

  return (
    <JobTimelineContainer item xs={12} id="job.timeline.container">
      <StyledTimeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        {jobs.map((job, index) => (
          <TimelineItem key={index}>
            <StyledTimelineOppositeContent children={job.timeline} />
            <TimelineSeparator
              children={
                <>
                  <TimelineDot color={index === 0 ? "primary" : "grey"} />
                  {index < jobs.length - 1 && <TimelineConnector />}
                </>
              }
            />

            <StyledTimelineContent>
              <Stack flexDirection="row" alignItems="center">
                <Typography
                  variant="h6"
                  component="span"
                  color={"white"}
                  children={job.title}
                />
                {job.current && (
                  <Chip
                    color="secondary"
                    variant="outlined"
                    size="small"
                    sx={{ ml: "10px" }}
                    label={
                      <Typography
                        variant="caption"
                        p=".2rem"
                        component="span"
                        fontWeight="bold"
                        children="PRESENT"
                      />
                    }
                  />
                )}
              </Stack>
              <Typography variant="subtitle1" color={"white"}>
                {job.company}
              </Typography>
              <Button variant="text" onClick={() => handleToggle(index)}>
                {expanded === index ? "Show Less" : "Show More"}
              </Button>
              <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                <Typography variant="body2" color={theme.palette.primary[200]} mb='10px'>
                  {job.details}
                </Typography>
              </Collapse>
            </StyledTimelineContent>
          </TimelineItem>
        ))}
      </StyledTimeline>
    </JobTimelineContainer>
  );
};

export default JobTimeline;
