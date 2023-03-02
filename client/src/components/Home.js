import React, { useState } from "react";
import Sidenav from "./Layout/Sidenav";
import Navbar from "./Layout/Navbar";
import styles from "./Home.module.css";

function Home() {
  const [toggle, setToggle] = useState(true);

  function toggleSideBar() {
    setToggle((prevToggle) => {
      return !prevToggle;
    });
  }
  return (
    <>
      <div className={toggle ? styles.grid : ""}>
        <section>
          <Sidenav toggle={toggle} />
        </section>
        <section>
          <Navbar toggleSideBar={toggleSideBar} />
        </section>
      </div>
    </>
  );
}

export default Home;
