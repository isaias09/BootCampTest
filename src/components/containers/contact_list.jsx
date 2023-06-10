import React from 'react'
import { Task } from '../../models/contact.class';
import ContactComponent from '../pure/contacto';

const ContactListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', 'usuario@correo.com', false)

  return (
    <div>
        <div>
           
        </div>
        <ContactComponent task={defaultTask}></ContactComponent> 
    </div>
  )
}


export default ContactListComponent