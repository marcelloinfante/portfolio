import * as THREE from 'three'
import { useFrame, useLoader } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const EarthHologram = () => {

  const hologram = useLoader(GLTFLoader, './modelos/Hologram/scene.gltf')
  let mixer
  if (hologram.animations.length) {
    mixer = new THREE.AnimationMixer(hologram.scene);
    hologram.animations.forEach(clip => {
      const action = mixer.clipAction(clip)
      action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta)
  })

  return(
    <primitive
      object={hologram.scene}
      scale={0.06}
      position={[0, 0, 0]}
    />
  )
}

export default EarthHologram
