import './Home.scss'
import SocialNet from '../../components/SocialNet'

const Home = () => {
  return (
    <main className='Home'>
      <div className='cont-text'>
        <h1 className='h1'>
          !Hola¡ Soy <span>Andy Caseres</span>
          <p className='p'>
            “De vez en cuando, una nueva tecnología, un antiguo problema y una
            gran idea se convierten en una innovación». Dean Kamen.
            <br />
            <br />
            “Las grandes oportunidades nacen de haber sabido aprovechar las
            pequeñas”. Bill Gates
          </p>
        </h1>
        <SocialNet />
      </div>
    </main>
  )
}

export default Home
