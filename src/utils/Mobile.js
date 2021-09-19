const IsMobile=()=>{

//choose the screen size 
  if (window.innerWidth < 720) {
      return true
  } else {
    return false
  }

}

export {IsMobile}