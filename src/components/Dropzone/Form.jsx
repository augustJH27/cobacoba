import React from "react";
import TextField from "@material-ui/core/TextField";
import { DropzoneArea } from "material-ui-dropzone";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import request from "superagent";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 400
    }
  }
}));

const CLOUDINARY_UPLOAD_PRESET = "upload";

const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/gixxerblade/upload";
  
const Form = ({
  formData,
  setFormData,
  setChange,
  setUploadedFileUrl,
  uploadedFileUrl
}) => {
  const classes = useStyles();
  const onSubmit = (e) => {
    e.preventDefault();
    setChange(false);
    setUploadedFileUrl({ uploadedFiles: e[0] });
    console.log(uploadedFileUrl.uploadedFiles);
    handleImageUpload(uploadedFileUrl.uploadedFiles);
    //console.log(uploadedFileUrl);
    //setFormData({ name: "", description: "" });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const onImageDrop = (e) => {
    setUploadedFileUrl({ uploadedFiles: e[0] });
    //handleImageUpload(uploadedFileUrl);
  };
  const handleImageUpload = (file) => {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", file);
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== "") {
        setUploadedFileUrl({
          uploadedFileURL: response.body.secure_url
        });
      }
    });
  };
  console.log(uploadedFileUrl.uploadedFileURL);

  return (
    <form onSubmit={onSubmit} className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="center">
        <DropzoneArea
          showFileNamesInPreview={true}
          maxFileSize={10000000}
          multiple="false"
          accept="image/*"
          onDrop={console.log}
          dropzoneText="Choose a file or drag it here"
          onChange={onImageDrop}
          type="file"
        ></DropzoneArea>
        <h2>Add a Description</h2>
        <TextField
          type="text"
          className={classes.root}
          id="outlined-basic"
          label="Description"
          variant="outlined"
          rows="4"
          multiline
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
        >
          SUBMIT
        </Button>{" "}
      </Grid>
    </form>
  );
};

export default Form;