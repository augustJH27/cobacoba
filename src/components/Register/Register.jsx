import React, {Fragment} from 'react';
import './Register.css';

import { Formik } from "formik";
import * as Yup from 'yup';

import { connect } from 'react-redux';
import { signupUser } from '../../redux/actions/userActions';
import { useHistory } from 'react-router';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
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
    marginTop: theme.spacing(3),
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

const Register = ({ signupUser }) => {
  const classes = useStyles();

  const history = useHistory();

  return (
    <Fragment>
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Required"),
          lastName: Yup.string().required('Required'),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(8, "Password is too short")
            .max(30, "Password is too long")
            .required("Required"),
          confirmPassword: Yup.string()
            .required("Required")
            .oneOf([Yup.ref("password")], "Passwords must match"),
        })}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          signupUser(values, history, setFieldError, setSubmitting);
        }}
        >
        <h1><strong>Join us for free!</strong></h1>
        <br />
        <h2 text-align='center'>Together we make the new system</h2>
        {({ isSubmitting }) => (
        <form 
        className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
						<Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          {!isSubmitting && (
          <ColorButton 
          type='submit'
          variant="contained" 
          color="primary" 
          className={classes.submit}
          >
          JOIN US
          </ColorButton>
          )}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href='/login' variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        )}
        </Formik>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
    </Fragment>
  );
}

export default connect(null, { signupUser })(Register);