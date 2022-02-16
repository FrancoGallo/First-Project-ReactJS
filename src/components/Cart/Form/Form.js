import React from 'react'
import './Form.css'

const Form = ({buyOrder, formChange, form, clearCart}) => {
  return (
    <section className='form'>
        <form onSubmit={buyOrder}>
            <input 
                onChange={formChange} 
                value={form.name} 
                type='text' 
                name='name' 
                placeholder='Nombre'/>
            <br/>
            <input 
                onChange={formChange} 
                value={form.lastName} 
                type='text' 
                name='lastName' 
                placeholder='Apellido'/>
            <br/>
            <input 
                onChange={formChange} 
                value={form.email} 
                type='text' 
                name='email' 
                placeholder='Mail'/>
            <br/>
            <input 
                onChange={formChange} 
                value={form.phone} 
                type='text' 
                name='phone' 
                placeholder='Tel.'/>
            <br/>
            <button className='btn btn-success'>Confirmar compra</button>
        </form>
        <button className='btn btn-danger' onClick={clearCart}>Vaciar carro</button>
    </section>
  )
}

export default Form