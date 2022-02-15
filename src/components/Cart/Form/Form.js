import React from 'react'

const Form = ({buyOrder, formChange, form}) => {
  return (
    <section>
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
            <button>Confirmar compra</button>
        </form>
    </section>
  )
}

export default Form