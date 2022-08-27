import React, { useState } from "react";
import "./index.css";
// Material Ints
import {
  Container,
  Button,
  Box,
  TextField,
  Rating,
  Grid,
  InputLabel,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { purple, grey } from "@mui/material/colors";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const Form = () => {
  // Create Hooks
  const [title, setTitle] = React.useState("");
  const [rating, setRating] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [titleErrorText, setTitleErrorText] = React.useState("");
  const [ratingErrorText, setRatingErrorText] = React.useState("");

  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [ratingValue, setRatingValue] = useState("");

  const [submitting, setSubmitting] = useState(false);

  // On Submit data value
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    if (!title || !rating) {
      if (!title) {
        setTitleErrorText("Please enter title");
      } else {
        setTitleErrorText("");
      }

      if (!rating) {
        setRatingErrorText("Please fill rating");
      } else {
        setRatingErrorText("");
      }
      return;
    }

    setTitleValue(title);
    setDescriptionValue(description);
    setRatingValue(rating);

    // After submit open list
    setSubmitting(true);

    // On submit clear value
    handleReset();
  };

  // Reset data value
  const handleReset = () => {
    setTitle("");
    setRating("");
    setDescription("");
    setTitleErrorText("");
    setRatingErrorText("");
  };
  // Delete Data
  const onDelete = (e) => {
    setSubmitting(false);
  };
  return (
    <>
      <Container>
        <Grid
          container
          sx={{
            mt: 3,
            justifyContent: "space-between",
          }}
        >
          <Grid item>
            {submitting && (
              <Box
                className="review-box"
                sx={{
                  backgroundColor: grey[300],
                  display: "flex",
                  alignItems: "center",
                  p: 3,
                  mb: 2,
                  position: "relative",
                }}
              >
                <Box>
                  <Typography
                    className="title"
                    variant="h2"
                    gutterBottom
                    sx={{ mb: 0.5 }}
                  >
                    {titleValue}
                  </Typography>
                  <Typography
                    className="des"
                    variant="h2"
                    gutterBottom
                    sx={{ color: grey[700] }}
                  >
                    {descriptionValue}
                  </Typography>
                  <Typography className="des" variant="h2">
                    Rating: {ratingValue}
                  </Typography>
                  <Typography
                    onClick={onDelete}
                    variant="caption"
                    sx={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      cursor: "pointer",
                    }}
                  >
                    <DeleteOutlineIcon />
                  </Typography>
                </Box>
              </Box>
            )}

            <Box
              className="form"
              component="form"
              spacing={3}
              sx={{
                p: 3,
                border: 1,
                borderColor: "grey.400",
              }}
            >
              <Typography
                className="heading"
                variant="h1"
                gutterBottom
                sx={{
                  textAlign: "center",
                  pb: 3,
                }}
              >
                {"Review Form"}
              </Typography>
              <TextField
                sx={{
                  mb: 3,
                }}
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                name="Title"
                autoFocus
                value={title}
                error={!!titleErrorText}
                helperText={titleErrorText}
                onChange={(e) => setTitle(e.target.value)}
              />

              <TextField
                sx={{
                  mb: 3,
                }}
                multiline
                rows={6}
                fullWidth
                id="description"
                label="Description"
                name="description"
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <InputLabel>Rating *</InputLabel>
              <Rating
                name="simple-controlled"
                value={rating}
                error={!!ratingErrorText}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
              <Typography className="error" variant="body2" gutterBottom>
                {ratingErrorText}
              </Typography>
              <Grid
                container
                spacing={3}
                sx={{
                  mt: 1,
                  justifyContent: "space-between",
                }}
              >
                <Grid item xs={6} sm={4} md={4}>
                  <Button
                    type="submit"
                    onClick={onSubmit}
                    className="primary-btn"
                    variant="contained"
                    fullWidth
                  >
                    {"Submit"}
                  </Button>
                </Grid>
                <Grid item xs={6} sm={4} md={4}>
                  <ColorButton
                    className="primary-btn"
                    variant="contained"
                    fullWidth
                    type="reset"
                    onClick={handleReset}
                  >
                    {"Reset"}
                  </ColorButton>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Form;
