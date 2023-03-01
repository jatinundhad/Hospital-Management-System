import { style } from '@mui/system';
import styles from '../CSS/Sidenav.module.css'
import List from './List'

export default function Sidenav(props) {
  return (
      <div className={`${styles.Sidenav} ${props.toggle ? styles.showNav : styles.hideNav}`} >
       <List/>
      </div>
  )
}
