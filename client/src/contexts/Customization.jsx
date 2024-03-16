import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

export const wireColors = [
    {
        color: "#0066ff",
        name: "blue",
    },
    {
        color: "#ffffff",
        name: "white",
    },
    {
        color: "#ff0000",
        name: "red",
    },
    {
        color: "#00ff00",
        name: "green",
    },
    {
        color: "#ffff00",
        name: "yellow",
    },
]

export const CustomizationProvider = (props) => {
    const [material, setMaterial] = useState('wood');
    const [sideWire, setSideWire] = useState(true);

    const [wire1Color,setWire1Color] = useState(wireColors[2]);
    const [wire2Color,setWire2Color] = useState(wireColors[3]);
    const [wire3Color,setWire3Color] = useState(wireColors[4]);

    const [password, setPassword] = useState([0,0,0,0]);

    return (<CustomizationContext.Provider value={{
        material,
        setMaterial,
        sideWire,
        setSideWire,
        wire1Color,
        setWire1Color,
        wire2Color,
        setWire2Color,
        wire3Color,
        setWire3Color,
        password,
        setPassword
    }}>{props.children}</CustomizationContext.Provider>);
}

export const useCustomization = () => {
    const context = useContext(CustomizationContext);
    return context;
}