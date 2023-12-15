import * as THREE from "three";
import {
  RigidBody,
  BallCollider
} from "@react-three/rapier";
import {useRef} from "react";
import { usePlayersControls } from "../../hooks"; 
import {useFrame} from "@react-three/fiber";

const MOVE_SPEED = 5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();


export const Player = ({position}) => {
  const playerRef = useRef();
  const {forward, right, back, left} = usePlayersControls();

  useFrame((state) => {
    if (!playerRef.current) return;

    const velocity = playerRef.current.linvel();

    frontVector.set(0, 0, back - forward);
    sideVector.set(left - right, 0, 0);
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(MOVE_SPEED).applyEuler(state.camera.rotation);

    playerRef.current.wakeUp();
    playerRef.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z });

    const {x, y, z} = playerRef.current.translation();
    // state.camera.position.set(x, y, z);
});


  return (
    <RigidBody position={position} mass={1} ref={playerRef} colliders={false}>
      <mesh>
        <sphereGeometry args={[0.2, 15, 15]} c/>
        <meshBasicMaterial color={"pink"} />
        <BallCollider args={[0.2, 0.5]}/>
      </mesh>
    </RigidBody>
  )
}