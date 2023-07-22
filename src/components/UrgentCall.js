import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const UrgentCall = () => {
  return (
    <a id="uptocall-mini" data-toggle="tooltip" data-placement="right" href="tel:093307549">
      <div className="uptocall-mini-phone">
        <StaticImage
          src="../assets/images/icons/outline_call_white_48dp.png"
          width={30}
          height={30}
          alt={"Nuoc son Nhap khau"}
        />
      </div>
    </a>
  )
}

export default UrgentCall
