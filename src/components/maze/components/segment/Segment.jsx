import { Floor } from "./components/floor"
import { Wall } from "./components/wall"

export const Segment = ({item}) => {
  return (
    <mesh>
      <Floor position={[item.row, 0, item.pos]}/>
      {
        item.walls[2] === true ?
          <Wall position={[item.row, 0.5, item.pos + 0.5]} rotation = {[0, Math.PI / 2, 0]}/>
          : null
      }
      {
        item.walls[1] === true ?
          <Wall position={[item.row + 0.5, 0.5, item.pos]}/>
          : null
      }
      {
        item.pos === 0 ?
          <Wall position={[item.row, 0.5, item.pos - 0.5]} rotation = {[0, Math.PI / 2, 0]} color="green"/>
          : null
      }
      {
        item.row === 0 ?
          <Wall position={[item.row - 0.5, 0.5, item.pos]} color="green"/>
          : null
      }
    </mesh>
  )
}