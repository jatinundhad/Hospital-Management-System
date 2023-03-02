import React from "react";
import styles from "./List.module.css";
import { FiLogIn } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineUserAdd } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { MdOutlineLocalHospital } from "react-icons/md";
import { BiDonateBlood } from "react-icons/bi";
import {
  FaFileInvoiceDollar,
  FaUserNurse,
  FaAmbulance,
  FaBed,
} from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { ImLab } from "react-icons/im";
import { CgNotes } from "react-icons/cg";
import { Link } from "react-router-dom";
import Logo from "../UI/Logo";

export default function List() {
  return (
    <>
      <Logo />
      <ul className={styles.Menus}>
        <li>
          <Link to="/" className={styles.changeDeco}>
            <RxDashboard size={20} />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/login" className={styles.changeDeco}>
            <FiLogIn size={20} />
            <span>Login</span>
          </Link>
        </li>
        <li>
          <MdOutlineLocalHospital size={20} />
          <span>Appointment</span>
        </li>
        <li>
          <FaBed size={20} />
          <span>Beds</span>
        </li>
        <li>
          <BiDonateBlood size={20} />
          <span>Blood Bank</span>
        </li>
        <li>
          <FaFileInvoiceDollar size={20} />
          <span>Invoices</span>
        </li>
        <li>
          <AiOutlineUserAdd size={20} />
          <span>Doctor</span>
        </li>
        <li>
          <FaUserNurse size={20} />
          <span>Nurse</span>
        </li>
        <li>
          <GiMedicines size={20} />
          <span>Pharma</span>
        </li>
        <li>
          <ImLab size={20} />
          <span>Laboratory</span>
        </li>
        <li>
          <FaAmbulance size={20} />
          <span>Ambulance</span>
        </li>
        <li>
          <RiAdminLine size={20} />
          <span>Admin</span>
        </li>
        <li>
          <CgNotes size={20} />
          <span>Reports</span>
        </li>
      </ul>
    </>
  );
}
