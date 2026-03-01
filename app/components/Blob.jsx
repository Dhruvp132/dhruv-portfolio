"use client"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial } from "@react-three/drei"
import { useRef } from "react"

function AnimatedSphere() {
  const mesh = useRef()
  const { mouse } = useThree()

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.y = mouse.x * 1.2
    mesh.current.rotation.x = mouse.y * 1.2
    mesh.current.position.y = Math.sin(state.clock.elapsedTime) * 0.15
  })

  return (
    <Sphere ref={mesh} args={[1, 64, 64]} scale={1.4}>
      <MeshDistortMaterial
        color="#B4FF00"
        distort={0.4}
        speed={2}
        roughness={0}
      />
    </Sphere>
  )
}

export default function Blob() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.4} />
<pointLight position={[2, 2, 2]} intensity={3} color="#B4FF00" />
<pointLight position={[-2, -2, -2]} intensity={2} color="#7C3AED" />
      <AnimatedSphere />
    </Canvas>
  )
}