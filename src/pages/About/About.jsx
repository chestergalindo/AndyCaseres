import SocialNet from '../../components/SocialNet'
import './About.scss'

const About = () => {
  return (
    <main className='About'>
      <div className='about-inf'>
        <h1 className='left-h1'>SOBRE MI</h1>
        <div className='left'>
          <img
            className='img'
            src='https://i.ibb.co/RyJHmxR/andy.png'
            alt='Andy'></img>
          <div className='cont-left'></div>
        </div>

        <div className='right'>
          <div className='cont-right'>
            <h3>
              Soy <span>Andy!</span>
            </h3>
            <span>
              Soy un Joven Apasionado por el Desarrollo Web, soy autodidacta
              Tengo un muy buen nivel de aprendizaje. Espero poder siempre dar
              lo mejor de mi y seguir aprendiendo nuevas tecnologias.
            </span>
          </div>
          <SocialNet />
        </div>
      </div>
    </main>
  )
}

export default About
