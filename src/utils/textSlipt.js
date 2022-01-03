const textSplit = text => {
  return (text.split("\n").filter((el) => {
    return el != "";
  }))
}

export default textSplit