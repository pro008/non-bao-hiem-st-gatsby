import Head from 'next/head'
import classes from './header.module.css'

export default function Guarantee({ name }) {
  return (
    <div className={classes.gurantee}>
      <div className={classes.headerItem}>
        <p><b>0912 354 783</b> (Mr. Vũ) | <small>nonbaohiemst@gmail.com</small></p>
      </div>
    </div>
  )
}
