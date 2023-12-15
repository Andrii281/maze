import { useEffect, useRef } from "react"
import { RigidBody } from "@react-three/rapier";
// import {DoubleSide} from "three"

export const Wall = ({position, rotation = [0, 0, 0], color = "orange"}) => {

  const wallRef = useRef();
  const rigidBodyRef = useRef();

  useEffect(() => {
    // if(rotate) {
    //   wallRef.current.rotation.y = Math.PI / 2;
    //   rigidBodyRef.current.setRotation(0, Math.PI / 2, 0);
    // }
  })

  return (
    <RigidBody ref={rigidBodyRef} type={"fixed"} >
       <mesh position={position} ref={wallRef} rotation={rotation}>
        <boxGeometry args={[0.1, 1]}/>
        <meshStandardMaterial 
          color={color} 
          opacity={0.4} 
          transparent
        />
      </mesh>
    </RigidBody>
  )
}