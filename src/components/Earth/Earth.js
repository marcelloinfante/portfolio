import { useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as THREE from 'three'

export default function Earth(props) {

  function detectMob() {
    return (( window.innerWidth <= 800 ));
  }

  const [colorMap, normalMap, cloudsMap] = useLoader(TextureLoader, [
    'Textures/2k_earth_daymap.jpg',
    'Textures/2k_earth_normal_map.jpg',
    'Textures/2k_earth_clouds.jpg'
  ])

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  const cursor = {
    x: 0,
    y: 0
  }

  window.addEventListener('mousemove', (event) => {
    if(!detectMob()) {
      cursor.x = event.clientX / sizes.width - .5
      cursor.y = event.clientY / sizes.height - .5
    }
  })

  const lookAtCubePosition = new THREE.Vector3()

  const myMesh = useRef()
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime()
    myMesh.current.rotation.y = a * 0.05
  });

  useFrame((state) => {
    if(!detectMob()) {
      lookAtCubePosition.x = myMesh.current.position.x
      state.camera.lookAt(lookAtCubePosition)
      state.camera.position.x = cursor.x * 2
      state.camera.position.y = -cursor.y * 2
    }
  })

  let lastKnownScrollPosition = 0
  document.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;
    try {
      myMesh.current.position.y = lastKnownScrollPosition * 0.0075 + .5
    } catch {}
  })

  const botaoClicado = () => {
    window.open("https://drive.google.com/file/d/1mxxjjiFuFvRE-6QL5nhuYy8fCnP971Gk/view?usp=sharing")
  }

  return (
    <>
      <group ref={myMesh} scale={2} position={[0, .5, 0]}>
        <mesh>
          <sphereBufferGeometry args={[1, 100, 100]} />
          <meshStandardMaterial
            metalness={0.1}
            roughness={0.3}
            map={colorMap}
            normalMap={normalMap}
          />
        </mesh>
        <mesh onClick={botaoClicado}>
          <sphereBufferGeometry args={[1.005, 100, 100]} />
          <meshStandardMaterial
            map={cloudsMap}
            transparent
            opacity={0.35}
            depthWrite={true}
          />
        </mesh>
      </group>
    </>
  )
}
