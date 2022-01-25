import './Home.scss'
import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import SocialNet from '../../components/SocialNet'

const Home = () => {
  return (
    <main className='Home'>
      <div className='cont-text'>
        <h1 className='h1'>
          !Hola¡ Soy <span>Andy Caseres</span>
          <p className='p'>
            «La mayoría de los buenos programadores programan no porque esperan
            que les pagen o que el público los adore, sino porque programar es
            divertido.»
          </p>
        </h1>
        <SocialNet />
      </div>
    </main>
  )
}

export default Home
