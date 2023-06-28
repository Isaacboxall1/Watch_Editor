import { ChromePicker } from "react-color"
import './ColorPicker.css'

export default function ColorPicker(props) {


    return ( 
    <div id="color-picker">
        <ChromePicker color={props.color} onChange={(color) => props.setColor({...color, [props.selected]: color.hex})} id="Picker"/>
        <div id="color-presets">
            <div className="color-preset" onClick={() => props.setColor({...props.color, strap: '#FF5F1F', body: '#3F3F3F', buttons:'white'})}>
                <div className="color-preset-inner-primary" style={{backgroundColor: '#FF5F1F'}}></div>
                <div className="color-preset-inner" style={{backgroundColor: '#3F3F3F'}}></div>
                <div className="color-preset-inner" style={{backgroundColor: 'white'}}></div>
            </div>

            <div className="color-preset" onClick={() => props.setColor({...props.color, strap: '#E965ED', body: 'white', buttons:'#E965ED'})}>
                <div className="color-preset-inner-primary" style={{backgroundColor: 'pink'}}></div>
                <div className="color-preset-inner" style={{backgroundColor: 'white'}}></div>
                <div className="color-preset-inner" style={{backgroundColor: 'pink'}}></div>
            </div>
            <div className="color-preset" onClick={() => props.setColor({...props.color, strap: '#3D3CC7', body: '#FF4136', buttons:'white'})}>
                <div className="color-preset-inner-primary" style={{backgroundColor: '#3D3CC7'}}></div>
                <div className="color-preset-inner" style={{backgroundColor: '#FF4136'}}></div>
                <div className="color-preset-inner" style={{backgroundColor: 'white'}}></div>
            </div>
            
        </div>
        </div>


    )}