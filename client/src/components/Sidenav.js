import React from 'react'
import styles from './CSS/Sidenav.module.css'
import List from './List'

export default function Sidenav() {
  return (
      <div className={styles.Sidenav}>
       <List/>
      </div>
  )
}
