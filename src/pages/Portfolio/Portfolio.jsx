import Card from './Card'
import './Portfolio.scss'
import calculadora from '../../assets/calculadora.png'
import pokedex from '../../assets/pokedex.png'
import cronometro from '../../assets/cronometro.png'
import agenda from '../../assets/agenda.png'
import carrocompras from '../../assets/carro-compra-react.png'
import todots from '../../assets/TodoTS.png'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <Card
        img={calculadora}
        title='Portafolio'
        info='Portafolio HTML - CSS - Javascript - React'
        web='https://calculadora-sable.vercel.app/'
        codigo='https://github.com/andycaseres2/CalculadoraJs'
      />
      <Card
        img={carrocompras}
        title='Carro de Compras'
        info='Carro de Compras HTML - CSS - Javascript - React'
        web='https://carro-de-compras-react.vercel.app/'
        codigo='https://github.com/andycaseres2/Carro-de-Compras-React-'
      />
      <Card
        img={todots}
        title='TODO Typescript'
        info='TODO HTML - CSS - Typescript - React'
        web='https://tareas-react-typescript.vercel.app/'
        codigo='https://github.com/andycaseres2/Tareas-React-Typescript'
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
    </div>
  )
}

export default Portfolio
