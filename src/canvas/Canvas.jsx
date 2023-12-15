import { Canvas } from "@react-three/fiber"

export const CanvasComponent = ({children}) => {
  return (
    <Canvas camera={{fov: 45, position: [0, 8, 10]}}>
      {children}
    </Canvas>
  )
}