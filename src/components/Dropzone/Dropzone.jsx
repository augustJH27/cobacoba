import React, { useState } from 'react';
import Form from './Form';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Dropzone = () => {
  const classes = useStyles();

	const [uploadedFileUrl, setUploadedFileUrl] = useState({
    uploadedFiles: null
  });

  const [formData, setFormData] = useState({
    name: "",
    description: ""
  });

  const [change, setChange] = useState(true);

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <h1><strong>Design</strong></h1>
        <br />
				<div className="container">
        <Form
          formData={formData}
          setFormData={setFormData}
          setChange={setChange}
          setUploadedFileUrl={setUploadedFileUrl}
          uploadedFileUrl={uploadedFileUrl}
        />
      </div>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}

export default Dropzone;