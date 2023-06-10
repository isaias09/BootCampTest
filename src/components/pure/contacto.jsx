import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/contact.class'

const ContactComponent = ({task}) => {

    const [count, setCount] = useState(true);

    const buttonHandler = () => {
        setCount(count => !count)
        console.log(count) // is false 
      }

  return (
    <div>
        <h2>
            Nombre: { task.name }
        </h2>
        <h3>
            Apellido: { task.sname }
        </h3>
        <h4>
            Email: { task.email}
        </h4>
        <h5>
            Conectado: {count ? 'Contacto Disponible':'Contacto No Disponible'}
        </h5>
        <button onClick={buttonHandler}>
            CAMBIAR ESTADO 
        </button>
    </div>
  )
}

ContactComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default ContactComponent