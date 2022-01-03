import Head from 'next/head'
import LargeRedButton from '../shared/large-red-button'
import classes from './introduction.module.css'

export default function Introduction({ name }) {
  return (
    <div className={classes.header_introduction}>
      <center>
        <p className={classes.p_introduction}>
          <strong>
            Logo Brand
          </strong>
        </p>
        <h3 className={`${classes.h3_introduction} text-bold`}>
            Non bao hiem uy tinh chat luong
        </h3>
        <LargeRedButton>Xem thêm</LargeRedButton>
      </center>
    </div>
  )
}
