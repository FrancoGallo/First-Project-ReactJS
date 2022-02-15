import React from 'react'
import { Link } from "react-router-dom"

const Ticket = ({orderSummary}) => {
  return (
    <>
        <i>Tu numero de orden es: {orderSummary}</i>
        <button><Link to={'/'}>Volver al inicio</Link></button>
    </>
  )
}

export default Ticket