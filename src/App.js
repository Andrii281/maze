import { CanvasComponent } from './canvas/Canvas';
import { Scene } from './scene/Scene';
import { Sky } from '@react-three/drei';
import './App.css';

function App() {
  return (
    <div className="App">
      <CanvasComponent>
        <Scene />
      </CanvasComponent>
    </div>
  );
}

export default App;