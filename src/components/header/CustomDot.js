import React from "react"

const CustomDot = ({ onClick, ...rest }) => {
  const { active } = rest

  return (
    <span
      className={`home-custom-dot-${active ? "active" : "inactive"}`}
      onClick={() => onClick()}
    />
  )
}

export default CustomDot
