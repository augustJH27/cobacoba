import React, {useState} from 'react'
import Sidebar from '../components/Sidebar/index';
import Navbar from '../components/Navbar-User/NavbarUser';

import Complete from '../components/Complete/Complete';
import Design from '../components/Design/index';
import Upcycle from '../components/Upcycle/Upcycle';
import Repeat from '../components/Repeat/Repeat';


const CustomerPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle}/>
					<Complete />
					<Design />
					<Upcycle />
          <Repeat />
        </>
    )
}

export default CustomerPage;