import React from 'react';
import { Canvas } from '@react-three/fiber';
import AppleWatch from '../AppleWatch/AppleWatch';
import { Text3D } from '@react-three/drei';
import { PresentationControls } from '@react-three/drei'
import './WatchEditor.css'
import ColorPicker from '../ColorPicker';

export default function WatchEditor(props) {
   
    let defaultcolors = {
        body: '',
        strap: '#FF5F1F',
        back: 'white'
      }

    const [color, setColor] = React.useState(defaultcolors)
    const [selected, setSelected] = React.useState('body')
   
    let ColorPickerProps ={
        color: color,
        setColor: setColor,
        selected: selected,
    }
    
    const watchProps = {
        selectComponent,
        color,
        selected,
    };


  function selectComponent(part) {
    setSelected(part)
  }


    let textOptions = {
        color: '#FF5F1F',
        size: 0.4,
        height: 0.007,
      }

return (
        <div id="watch-editor">
            <div id="threed-elements">
            <Canvas>
                <ambientLight />
                <pointLight position={[2, 3, 4]} />
                <pointLight position={[-2, 3, 4]} />
                <Text3D font={'./Roboto_Bold.json'} {...textOptions} position={[1.2,2.5,0]}>{selected}</Text3D>
                <PresentationControls  polar={[-100, 100]} azimuth={[-Infinity, Infinity]} speed={2}>
                <group rotation={[0,0.5,0]}>
                <AppleWatch scale={2.5} {...watchProps} />
                </group>
                </PresentationControls>
            </Canvas>
            </div>
            <div id="changes">
            <ColorPicker {...ColorPickerProps} />
            </div>
      </div>


    )
}