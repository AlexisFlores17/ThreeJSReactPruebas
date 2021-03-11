import React from 'react';

//first
import {Canvas} from "react-three-fiber";


function App() {
  return (
    <>
    {/* //only threeJS elements */}
      <Canvas>
        <mesh>
          <boxBufferGeometry attach='geometry' args={[1,1,1]}/>
          <meshStandardMaterial attach='material' />
        </mesh>
      </Canvas>
      
    </>
  );
}

export default App;
