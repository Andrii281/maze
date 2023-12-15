import { Sky, PointerLockControls } from "@react-three/drei"
import { Maze } from "../components/maze/Maze"
import { Player } from "../components/player";
import { Physics } from "@react-three/rapier";

// const maze = "*-*-**-*-****-*"
const maze = ["*", "-", "*", "-", "*", "*", "-", "*", "-", "*", "*", "*", "*", "-", "*"];

export const Scene = ({position}) => {
  return (
    <>
      {/* <OrbitControls/> */}
      <ambientLight />
      <PointerLockControls />
      <directionalLight />
      <Physics gravity={[0, -20, 0]}>
        <Maze options={{maze: maze, count: 5}}/>
        <Player position={[0, 2, 0]}/>
        <Sky sunPosition={[20, 100, 20]}/>      
      </Physics>
    </>
  )
}