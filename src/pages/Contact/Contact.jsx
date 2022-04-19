import './Contact.scss'
import Card from './Card.jsx'
import { FaLayerGroup } from 'react-icons/fa'
import { RiComputerLine } from 'react-icons/ri'
import { BsPhone } from 'react-icons/bs'

import SocialNet from '../../components/SocialNet'

const Contact = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault()
  }

  return (
    <div className='Contact'>
      <h1 className='title'>Contacto</h1>
      <div className='contacto-content'>
        <div className='Contact-Form'>
          <form
            onSubmit={handleSubmit}
            id='formulario'
            className='Form'
            action=''
          >
            <h2 className='sub-title'>Ponte en contacto</h2>
            <div className='input'>
              <label for=''>Nombre *</label>
              <input
                id='name'
                type='text'
                name='name'
                placeholder='Nombre Completo'
              />
            </div>
            <div className='input'>
              <label for=''>Numero *</label>
              <input
                type='text'
                id='number'
                name='number'
                placeholder='Numero Celular'
              />
            </div>
            <div className='input'>
              <label for=''>Correo *</label>
              <input
                type='text'
                id='mail'
                name='mail'
                placeholder='Correo Electronico'
              />
            </div>
            <div class='textarea'>
              <label for=''>Mensaje *</label>
              <textarea
                name='msj'
                id='msj'
                cols='30'
                rows='6'
                placeholder='Cuentame'
              ></textarea>
            </div>
            <button className='btn'>Enviar</button>
          </form>
        </div>
        <div className='Servicios'>
          <h2 className='title-Servicios'>Servicios</h2>
          <Card
            icon={<FaLayerGroup />}
            title='Diseño Web'
            parrafo='Planificar y diseñar interfaces digitales.o.'
          />
          <br />
          <Card
            icon={<RiComputerLine />}
            title='Desarrollo Web'
            parrafo='Construir y mantener interfaces digitales..'
          />
          <br />
          <Card
            icon={<BsPhone />}
            title='Diseño Responsive'
            parrafo='Adaptabilidad y Visualizacion de interfaces digitales.'
          />
          <div className='contact-social'>
            <SocialNet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
