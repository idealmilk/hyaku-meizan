import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import Floor from './Floor'


const Hero = () => {
  return (
    <section className="fixed top-0 h-screen w-screen bg-[#FEFDF1]">
      <Canvas
        shadows
        className=""
        camera={
          {
            position: [ -6, 7, 7 ],
          }
        }
      >
        {/* eslint-disable-next-line react/no-unknown-property */}
        <ambientLight intensity={0.1} />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <directionalLight color="red" position={[ 0, 0, 5 ]} />
        <OrbitControls enableZoom={false} />
        <Floor />
      </Canvas>
    </section>
  )
}

export default Hero
