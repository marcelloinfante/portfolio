import { Suspense } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const RobotHand = () => {
  const gltf = useLoader(GLTFLoader, './modelos/RobotHand/scene.gltf')
  return (
    <Suspense fallback={null}>
      <primitive
        object={gltf.scene}
        position={[.4, -1, 2]}
        rotation={[0, 1.5, 0]}
      />
    </Suspense>
  )
}

export default RobotHand
