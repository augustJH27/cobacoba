import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
	formControl: {
    margin: theme.spacing(2),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Album() {
  const classes = useStyles();

	const [state, setState] = useState({
    age: '',
    name: 'hai',
  });

	const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Craft Your Styles
            </Typography>
						<div>
							<FormControl className={classes.formControl}>
							</FormControl>
							<FormControl variant="outlined" width='fullWidth' className={classes.formControl}>
								<InputLabel htmlFor="outlined-age-native-simple">Your Styles</InputLabel>
								<Select
          				native
          value={state.age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Trousers</option>
          <option value={20}>Shirt</option>
          <option value={30}>Hoodie</option>
        </Select>
      </FormControl>
    </div>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}