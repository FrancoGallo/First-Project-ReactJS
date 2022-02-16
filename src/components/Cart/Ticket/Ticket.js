import React from 'react'
import { Link } from "react-router-dom"
import './Ticket.css'

const Ticket = ({orderSummary}) => {
  return (
    <section className='ticket'>
        <h2>¡Gracias por tu compra!</h2>
        <h5>Tu numero de orden es: {orderSummary}</h5>
        <button className='btn btn-success'><Link to={'/'}>Volver al inicio</Link></button>
    </section>
  )
}

export default Ticket