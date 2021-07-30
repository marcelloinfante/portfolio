import * as THREE from 'three'
import { RoundedBox } from "@react-three/drei"
import Nasa from './../../fonts/NasalizationRg_Regular.json'

const TituleHeader = () => {

  const font = new THREE.FontLoader().parse(Nasa)

  const textOptions = {
    font,
    size: 5,
    height: 1
  };

  const botaoClicado = () => {
    window.open("https://drive.google.com/file/d/1mxxjjiFuFvRE-6QL5nhuYy8fCnP971Gk/view?usp=sharing")
  }

  return(
    <>
      <mesh scale={0.075} position={[-2.275, .4, 2.25]}>
        <textGeometry attach='geometry' args={['Marcello Infante', textOptions]} />
        <meshStandardMaterial attach='material' />
      </mesh>
      <mesh scale={0.04} position={[-1.92, 0, 2.25]}>
        <textGeometry attach='geometry' args={['Desenvolvedor Front-end', textOptions]} />
        <meshStandardMaterial attach='material' />
      </mesh>
      <mesh onClick={botaoClicado}>
        <RoundedBox
          args={[1, .4, .1]}
          radius={0.05}
          smoothness={4}
          position={[0, -.4, 2.25]}
          >
        </RoundedBox>
        <meshStandardMaterial attach='material' />
      </mesh>
      <mesh scale={0.02} position={[-0.41, -.45, 2.35]}>
        <textGeometry attach='geometry' args={['CURRÍCULO', textOptions]} />
        <meshStandardMaterial attach='material' color='black' />
      </mesh>
    </>
  )
}

export default TituleHeader
