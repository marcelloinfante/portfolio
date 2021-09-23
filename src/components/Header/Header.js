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
      <h1 data-aos='fade-up' className='header__titule'>About me</h1>
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
          I am a inventor passionate about technology and i acknowledge the power that it have to change the world.
          My mission is to help people using innovation and engineering.
          The focus of my work is to develop solutions through software technologies.
        </p>
      </div>
    </div>
  )
}

export default Header
