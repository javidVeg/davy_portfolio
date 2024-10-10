import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions,
  Typography,
  Grid2,
} from "@mui/material";
import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const ResumeViewer = ({ open = true }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const handlePreviousPage = () => {
    setPageNumber((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPageNumber((prevPage) => Math.min(prevPage + 1, numPages));
  };

  return (
    <Dialog open={open} maxWidth="md" fullWidth>
      <DialogContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Document
            file="/davy_resume_main.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<p>Loading PDF...</p>}
          >
            <Page scale={1.2} pageNumber={pageNumber} />
          </Document>
          <DialogActions sx={{ width: "100%" }}>
            <Grid2
              container
              spacing={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Grid2 item>
                <Button
                  variant="contained"
                  onClick={handlePreviousPage}
                  disabled={pageNumber <= 1}
                >
                  Previous
                </Button>
              </Grid2>
              <Grid2 item>
                <Typography variant="caption">
                  Page {pageNumber} of {numPages}
                </Typography>
              </Grid2>
              <Grid2 item>
                <Button
                  variant="contained"
                  onClick={handleNextPage}
                  disabled={pageNumber >= numPages}
                >
                  Next
                </Button>
              </Grid2>
            </Grid2>
          </DialogActions>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeViewer;
