import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Suspense } from "react";
import './App.css'
import styles from './canvas-app.modules.css'

import Earth from './components/Earth/Earth'
import RobotHand from './components/RobotHand/RobotHand'
import TituleHeader from './components/TituleHeader/TituleHeader'
import Loader from './components/Loader/Loader'
import Header from './components/Header/Header'
import Technologies from './components/Technologies/Technologies'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'

const proporcaoDaTela = window.innerWidth / window.innerHeight

let posicaoDaCamera
if (proporcaoDaTela >= 1.2) {
  if ( window.innerWidth <= 380) {
    posicaoDaCamera = {position: [0, 0, 8]}
  }
  else if ( window.innerWidth <= 490) {
    posicaoDaCamera = {position: [0, 0, 7]}
  }
  else if ( window.innerWidth <= 650) {
    posicaoDaCamera = {position: [0, 0, 6]}
  }
}
else if (proporcaoDaTela >= 0.8 && proporcaoDaTela < 1.2) {
  if ( window.innerWidth <= 380) {
    posicaoDaCamera = {position: [0, 0, 9]}
  }
  else if ( window.innerWidth <= 490) {
    posicaoDaCamera = {position: [0, 0, 8]}
  }
  else if ( window.innerWidth <= 650) {
    posicaoDaCamera = {position: [0, 0, 7]}
  }
  else if ( window.innerWidth > 650) {
    posicaoDaCamera = {position: [0, 0, 6]}
  }
}
else if (proporcaoDaTela >= 0.5 && proporcaoDaTela < 0.8) {
  if ( window.innerWidth <= 380) {
    posicaoDaCamera = {position: [0, 0, 10]}
  }
  else if ( window.innerWidth <= 530) {
    posicaoDaCamera = {position: [0, 0, 9]}
  }
  else if ( window.innerWidth <= 650) {
    posicaoDaCamera = {position: [0, 0, 8]}
  }
  else if ( window.innerWidth > 650) {
    posicaoDaCamera = {position: [0, 0, 7]}
  }
}
else if (proporcaoDaTela < 0.5) {

  if ( window.innerWidth <= 350) {
    posicaoDaCamera = {position: [0, 0, 12]}
  }
  else if ( window.innerWidth <= 380) {
    posicaoDaCamera = {position: [0, 0, 11]}
  }
  else if ( window.innerWidth <= 530) {
    posicaoDaCamera = {position: [0, 0, 10]}
  }
  else if ( window.innerWidth <= 650) {
    posicaoDaCamera = {position: [0, 0, 9]}
  }
  else if ( window.innerWidth > 650) {
    posicaoDaCamera = {position: [0, 0, 8]}
  }
}

const teste = false
let load
let planeta
if (!teste) {
  load = <Loader />
  planeta = (
    <Canvas
      camera={posicaoDaCamera}
      className={styles.canvas}>
      <Suspense fallback={null}>
        <TituleHeader />
        <pointLight color='white' position={[7.5, 0, 10]} intensity={1.2} />
        <Earth />
        <Stars
          radius={300}
          depth={60}
          count={10000}
          factor={7}
          saturation={0}
          fade={true}
        />
        <RobotHand />
      </Suspense>
    </Canvas>
  )
}

const App = () => {
  return (
    <div className="App">
      {load}
      {planeta}
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <Projects />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;

//<Loader />
