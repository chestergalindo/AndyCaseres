import './Contact.scss'
import Card from './Card.jsx'
import { FaLayerGroup } from 'react-icons/fa'
import SocialNet from '../../components/SocialNet'

const Contact = () => {
  return (
    <div className='Contact'>
      <h1 className='title'>Contacto</h1>
      <div className='contacto-content'>
        <div className='Contact-Form'>
          <form className='Form' action=''>
            <h2 className='sub-title'>Ponte en contacto</h2>
            <div className='input'>
              <label for=''>Pon tu nombre*</label>
              <input type='text' />
            </div>
            <div className='input'>
              <label for=''>Pon tu nombre*</label>
              <input type='text' />
            </div>
            <div className='input'>
              <label for=''>Pon tu nombre*</label>
              <input type='text' />
            </div>
            <div class='textarea'>
              <label for=''>mensaje*</label>
              <textarea name='' id='' cols='30' rows='6'></textarea>
            </div>
            <input className='btn' type='submit' />
          </form>
        </div>
        <div className='Servicios'>
          <h2 className='title-Servicios'>Servicios</h2>
          <Card
            icon={<FaLayerGroup />}
            title='Diseño Web'
            parrafo='La interfaz debe proyectar la imagen corporativa del cliente, su esencia y valores deben entenderse más allá de colocar solo el logotipo.'
          />
          <br />
          <Card
            icon={<FaLayerGroup />}
            title='Diseño Web'
            parrafo='La interfaz debe proyectar la imagen corporativa del cliente, su esencia y valores deben entenderse más allá de colocar solo el logotipo.'
          />
          <br />
          <Card
            icon={<FaLayerGroup />}
            title='Diseño Web'
            parrafo='La interfaz debe proyectar la imagen corporativa del cliente, su esencia y valores deben entenderse más allá de colocar solo el logotipo.'
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
