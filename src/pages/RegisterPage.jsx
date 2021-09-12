import React, {useState} from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import CustomerRegister from '../container/Customer/Register/CustomerRegister';
import SupplierRegister from '../container/Supplier/Register/SupplierRegister';

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

const RegisterPage =() => {
  const classes = useStyles();

	const [value,setValue]=useState(0)
	const handleChange = (event, newValue) => {
    setValue(newValue);
  };

	function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
			<h1><strong>Join us for free!</strong></h1>
        <br />
        <h2 text-align='center'>Together we make the new system</h2>
			<Tabs
          value={value}
          indicatorColor='primary'
          textColor="grey"
          onChange={handleChange}
          aria-label="disabled tabs example"
          variant="fullWidth"
        >
				<Tab label="Customer" />
          <Tab label="Supplier" />
        </Tabs>
        <form
        className={classes.form}>
					<TabPanel value={value} index={0}>
          <CustomerRegister handleChange={handleChange}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <SupplierRegister />
      </TabPanel>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}

export default RegisterPage;