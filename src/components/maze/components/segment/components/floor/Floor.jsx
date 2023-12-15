import { RigidBody  } from "@react-three/rapier";
import { CuboidCollider } from "@react-three/rapier";

export const Floor = ({position}) => {
  return (
    <RigidBody type="fixed">
      <mesh position={position} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color={"blue"}/>
        {/* <CuboidCollider args={[1, 1]} position={[0, 0, 0]} /> */}
      </mesh>
    </RigidBody>
  )
}