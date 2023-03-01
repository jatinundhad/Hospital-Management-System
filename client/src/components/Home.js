import React,{useState} from 'react'
import Sidenav from './Sidenav';
import Navbar from './Navbar'; 

function Home() {
    const [toggle,setToggle] = useState(false);

    function toggleSideBar() {
      setToggle((prevToggle) => {
        return !prevToggle;
      })
    }
  return (
    <>
    <div >
    <Navbar toggleSideBar={toggleSideBar}/>
    </div>
   <div>
     <Sidenav toggle={toggle}/>
   </div>
   </>
  )
}

export default Home
