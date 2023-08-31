import { useState } from "react";
import { createContext } from "react";
import { useGLTF } from '@react-three/drei';



export const ColorContext = createContext({});


export const ColorContextProvider = ({children}) => {
    const { materials } = useGLTF("/Gio.gltf");
    const [currentColor, serCurrentColor] = useState({
        color:"#000000",
        text:"Jet Black",
        rgbColor:"0, 0, 0",
    })

    let changeColorContext = (colorObj) => {

        materials.Body.color.set(colorObj.color);
        serCurrentColor(colorObj)
      }

    return(
        <ColorContext.Provider value={{currentColor, changeColorContext}}>
            {children}
        </ColorContext.Provider>
    )

}