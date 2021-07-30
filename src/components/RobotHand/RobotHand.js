import { Suspense, useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const RobotHand = () => {

  const myMesh = useRef()

  let lastKnownScrollPosition = 0

  document.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;
    try {
      myMesh.current.position.y = lastKnownScrollPosition * 0.0075 - 1
    } catch {}
  })

  const gltf = useLoader(GLTFLoader, './modelos/RobotHand/scene.gltf')
  return (
    <Suspense fallback={null}>
      <primitive
        ref={myMesh}
        object={gltf.scene}
        position={[.4, -1, 2]}
        rotation={[0, 1.5, 0]}
      />
    </Suspense>
  )
}

export default RobotHand
