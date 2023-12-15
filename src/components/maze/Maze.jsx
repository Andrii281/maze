import { useEffect, useState } from "react" 
import { Segment } from "./components/segment/Segment"
import { createMazeMap } from "../../scripts"

export const Maze = ({options}) => {

  const [mazeMap, setMazeMap] = useState(null);

  useEffect(() => {
    setMazeMap(createMazeMap(10, 10))

    const listener = (e) => {
      if (e.code  === "KeyQ") {
        setMazeMap(createMazeMap(10, 10))
      }
    }
    // eslint-disable-next-line
    addEventListener("keydown", listener);
    // eslint-disable-next-line
    return () => removeEventListener("keydown", listener);
  }, [])

  useEffect(() => {
    console.log("mazeMap: ", mazeMap)
  }, [mazeMap])

  const drawMaze = () => {
    return mazeMap && (
      <group >
        {
          mazeMap.map((item, index) => {
            return <Segment item={item}/>
          })
        }
      </group>
    )
  }

  return (
    <mesh>
      {drawMaze()}
      {/* <Segment position={[4, 0, 1]}/> */}
    </mesh>
  )
}