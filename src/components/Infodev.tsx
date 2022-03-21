import imagenes from '../assets/imagenes'
import '../styles/Infodev.scss'

const Infodev = () => {
  return (
    <div className='Infodev'>
      <img className='logo' src={imagenes.logo} alt='AC' />
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
