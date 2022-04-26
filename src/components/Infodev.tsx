import imagenes from '../assets/imagenes'
import '../styles/Infodev.scss'

const Infodev = () => {
  return (
    <div className='Infodev'>
      <a href='/'>
        {' '}
        <img className='logo' src={imagenes.logo} alt='AC podrias colocar un nombre mas sencillo pensando en personas que utilizan solo lectores de pantalla' />
      </a>
      <br />
      <span>
        © 2022 por{' '}
        <a
          href='https://www.instagram.com/andycaseresdev/'
          target='__blank'
          className='andy-caseres'
        >
          Andy Wuillian Caseres Fernandez
        </a>
      </span>
    </div>
  )
}

export default Infodev
