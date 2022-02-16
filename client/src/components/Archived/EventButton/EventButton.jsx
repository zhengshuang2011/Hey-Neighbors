import React from 'react'
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { Arrow } from "../../assets/arrow-icon.png"
import "./EventButton.css"
//import Button from '@mui/material/Button';

function EventButton() {
  return (

    <button className='eventButton'>
      Create Your Event
      <ArrowCircleRightIcon className='arrowIcon' />
    </button>
  )
}

export default EventButton



