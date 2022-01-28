import Card from './Card'
import './Portfolio.scss'
import calculadora from '../../assets/calculadora.png'
import pokedex from '../../assets/pokedex.png'
import cronometro from '../../assets/cronometro.png'
import agenda from '../../assets/agenda.png'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <Card
        img={calculadora}
        title='Portafolio'
        info='Portafolio creado con HTML - CSS - Javascript - React'
        web='https://calculadora-sable.vercel.app/'
        codigo='https://github.com/andycaseres2/CalculadoraJs'
      />
      <Card
        img={calculadora}
        title='Calculadora'
        info='Calculadora creada con HTML - CSS - Javascript'
        web='https://calculadora-sable.vercel.app/'
        codigo='https://github.com/andycaseres2/CalculadoraJs'
      />
      <Card
        img={pokedex}
        title='Pokedex'
        info='Pokedex creado con HTML - CSS - Javascript'
        web='https://pokedex-sand-psi.vercel.app/'
        codigo='https://github.com/andycaseres2/PokeDexJS'
      />
      <Card
        img={cronometro}
        title='Cronometro'
        info='Cronometro creado con HTML - CSS - Javascript'
        web='https://cronometro-two.vercel.app/'
        codigo='https://github.com/andycaseres2/Cronometro'
      />
      <Card
        img={agenda}
        title='Agenda'
        info='Agenda creada con HTML - CSS - Javascript'
        web='https://agenda-contactos.vercel.app/'
        codigo='https://github.com/andycaseres2/AgendaContacto-Js'
      />
    </div>
  )
}

export default Portfolio
