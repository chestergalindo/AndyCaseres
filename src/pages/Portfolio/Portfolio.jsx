import Card from './Card'
import './Portfolio.scss'
import acclima from '../../assets/acclima.png'
import pokedex from '../../assets/pokedex.png'
import carrocompras from '../../assets/carro-compra-react.png'
import spacex from '../../assets/SPX.png'
import calculadora from '../../assets/calculadora.png'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <Card
        img={calculadora}
        title='Portafolio'
        info='Portafolio HTML - CSS - SASS - Javascript - Typescript - React - React Router'
        web='#'
        codigo='#'
      />
      <Card
        img={carrocompras}
        title='Carro de Compras'
        info='Carro de Compras HTML - CSS - Javascript - React'
        web='https://carro-de-compras-react.vercel.app/'
        codigo='https://github.com/andycaseres2/Carro-de-Compras-React-'
      />
      <Card
        img={spacex}
        title='SpaceX Missions'
        info='Proyecto creado con React - CSS - Javascript - FETCH - React Router'
        web='https://spacex-missions-eight.vercel.app/'
        codigo='https://github.com/andycaseres2/spacex-missions'
      />
      <Card
        img={acclima}
        title='ACClima'
        info='App del Clima creada con HTML - CSS - SASS - Javascript - React - FETCH'
        web='https://acclima.vercel.app/'
        codigo='https://github.com/andycaseres2/acclima'
      />
      <Card
        img={pokedex}
        title='Pokedex'
        info='Pokedex creado con HTML - CSS - Javascript - FETCH'
        web='https://pokedex-sand-psi.vercel.app/'
        codigo='https://github.com/andycaseres2/PokeDexJS'
      />
      <Card
        img={calculadora}
        title='Calculadora'
        info='Calculadora creado con HTML - CSS - Javascript'
        web='#'
        codigo='#'
      />
    </div>
  )
}

export default Portfolio
