import { useEffect, useState } from "react"

export const usePlayersControls = () => {
  const keys = {
    KeyW: "forward",
    KeyD: "right",
    KeyS: "back",
    KeyA: "left"
  }

  const getMovement = (key) => {
    return keys[key]
  };

  const [movement, setMovement] = useState({
    forward: false,
    right: false,
    back: false,
    left: false
  })

  const setMovementState = (code, status) => {
    if (code !== undefined) {
      setMovement((prev) => ({...prev, [code]: status}))
      console.log("movement: ", movement)
    }
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      setMovementState(getMovement(event.code), true)
    }

    const handleKeyUp = (event) => {
      setMovementState(getMovement(event.code), false)
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    }
  })
  
  return movement;  
}