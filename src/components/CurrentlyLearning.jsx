import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Stack,
  Box,
} from "@mui/material";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import { useMediaQueries } from "../utils/hooks/useMediaQueries";

const learning = [
  {
    category: "Current Course:",
    subCategory:
      "The Complete Junior to Senior Web Developer Roadmap - ZTM Academy",
    progress: 30,
  },
  {
    category: "Currently Learning:",
    subCategory: "Java, Spring Boot",
    progress: null,
  },
];

const CurrentlyLearning = () => {
  const mediaQuery = useMediaQueries();
  return (
    <Grid item xs={12} p="16px">
      <Stack
        gap={3}
        flexDirection="column"
        // justifyContent="space-between"
        // alignContent="center"
        // alignItems="center"
      >
        {learning.map((set, index) => (
          <Stack
          key={index}
            flexDirection="row"
            justifyContent="space-between"
            flexWrap="wrap"
            alignItems="center"
            gap={2}
          >
            <Box
              gap={1}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Typography
                variant="h5"
                color={"primary"}
                mr="20px"
                children={set.category}
              />

              <Typography color="white" children={set.subCategory} />
            </Box>
            {set.progress && (
              <Box sx={{ position: "relative" }}>
                <CircularProgress
                  variant="determinate"
                  sx={(theme) => ({
                    color: theme.palette.grey[200],
                  })}
                  value={100}
                />
                <CircularProgress
                  sx={(theme) => ({
                    animationDuration: "550ms",
                    position: "absolute",
                    left: 0,
                  })}
                  variant="determinate"
                  value={set.progress}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 3,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    component="div"
                    color="white"
                    children={`${set.progress}%`}
                  />
                </Box>
              </Box>
            )}
          </Stack>
        ))}
      </Stack>
    </Grid>
  );
};

export default CurrentlyLearning;
