import React from 'react';

import { Formik } from "formik";
import * as Yup from 'yup';

import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions';
import { useHistory } from 'react-router';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    padding: '10px 28px',
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
    '&:hover': {
      backgroundColor: grey[900],
    },
  },
}))(Button);

const Login =({ loginUser}) => {
  const classes = useStyles();

  const history = useHistory();

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(8, "Password is too short")
            .max(30, "Password is too long")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          console.log(values);
          loginUser(values, history, setFieldError, setSubmitting);
        }}
      >
        <React.Fragment>
        <h1><strong>Login</strong></h1>
        <br />
        {({ isSubmitting }) => (
        <form
        className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {!isSubmitting && (
          <ColorButton
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </ColorButton>
          )}
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='/register' variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
        )}
        </React.Fragment>
        </Formik>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}

export default connect(null, { loginUser })(Login);