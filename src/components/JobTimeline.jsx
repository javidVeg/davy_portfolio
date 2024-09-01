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
  padding: '0px 12px',
});

const StyledTimeline = styled(Timeline)(({ theme }) => ({

}))

const JobTimeline = () => {
  const [expanded, setExpanded] = useState(null);

  const theme = useTheme();

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const jobs = [
    {
      title: "Lead Software Engineer - Frontend",
      company: "Phidata",
      current: true,
      details: "Details about the Lead Software Engineer role at Phidata...",
      timeline: "January 2021 - Present",
    },
    {
      title: "Founding Software Engineer",
      company: "Speedybrand (YC-W23)",
      current: false,
      details:
        "Details about the Founding Software Engineer role at Speedybrand...",
      timeline: "January 2020 - December 2020",
    },

    {
      title: "Front-End Engineer",
      company: "Maya Labs (YC-S22)",
      current: false,
      details: "Details about the Front-End Engineer role at Maya Labs...",
      timeline: "January 2019 - December 2019",
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
              <Stack flexDirection= 'row' alignItems='center'>
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
                <Typography variant="body2" color="white">
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
