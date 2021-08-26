import React from 'react'
// import Navbar from '../components/Navbar-User/NavbarUser';

import Complete from '../components/Complete/Complete';
import Design from '../components/Design/index';
import Upcycle from '../components/Upcycle/Upcycle';
import Repeat from '../components/Repeat/Repeat';


function CustomerPage () {
    return (
        <>
					<Complete />
					<Design />
					<Upcycle />
          <Repeat />
        </>
    )
}

export default CustomerPage;