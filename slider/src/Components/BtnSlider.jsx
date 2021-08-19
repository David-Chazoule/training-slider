import React from 'react'
import leftArrow from './icon/leftarrow.svg';
import rightArrow from './icon/rightarrow.svg';



function BtnSlider({direction, moveSlide}) {


  
  return(
    <div>
      <button
      onClick={moveSlide}
      className={direction ==="next" ?"btn-slide next" : "btn-slide prev"}>
        <img src={direction === "next" ? rightArrow : leftArrow } alt=" fleches"/>
      </button>

      

    </div>
  )
}

export default BtnSlider ;