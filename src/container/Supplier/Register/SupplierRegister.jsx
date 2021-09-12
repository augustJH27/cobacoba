import React, {Fragment} from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// import { grey } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    background: '#fff',
    borderRadius: 0,
    borderColor: 'grey.900',
    color: 'black',
    backgroundColor: '#fff',
    height: 48,
    padding: '10px 100px',
  },
  second: {
    background: '#fff',
    borderRadius: 0,
    borderColor: 'grey.900',
    color: 'black',
    backgroundColor: '#fff',
    height: 36,
    padding: '5px 100px',
  },
  label: {
    textTransform: 'capitalize',
  },
}));

const SupplierRegister = () => {
  const classes = useStyles();
  return (
    <Fragment>
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form}>
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
                label="Company Email"
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
          </Grid>
          <Button
          type='submit'
          fullWidth
          variant='outlined'
          className={classes.submit}
          classes={{
            root: classes.root, // class name, e.g. `classes-nesting-root-x`
            label: classes.label, // class name, e.g. `classes-nesting-label-x`
          }}>
            Register
          </Button>
          <Button
          type='submit'
          fullWidth
          variant='outlined'
          className={classes.submit}
          classes={{
            root: classes.second, // class name, e.g. `classes-nesting-root-x`
            label: classes.label, // class name, e.g. `classes-nesting-label-x`
          }}>
            Login
          </Button>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
    </Fragment>
  );
}

export default SupplierRegister;