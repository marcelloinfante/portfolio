import './Header.css'
import { useEffect } from 'react'
import { Canvas } from "@react-three/fiber"
import Aos from 'aos'
import 'aos/dist/aos.css'
import EarthHologram from './EarthHologram/EarthHologram'

const Header = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return(
    <div className='header'>
      <h1 data-aos='fade-up' className='header__titule'>Sobre mim</h1>
      <div className='header__center'>
      <Canvas
        camera={{
          fov: 45,
          position: [0, 0, 1]
        }}
      >
        <EarthHologram />
      </Canvas>
        <p data-aos='fade-up' className='header__text'>
          Sou um inventor apaixonado por tecnologia e acredito no poder que ela tem de transformar o mundo.
          A minha missão é ajudar as pessoas utilizando inovação e engenharia.
          O foco do meu trabalho é desenvolver experiências imersivas por meio de UIs modernas.
        </p>
      </div>
    </div>
  )
}

export default Header
