import React from 'react'
import * as IonIcon5 from "react-icons/io5/";


export type IconNames = "IoHomeSharp" | 
    "IoAddCircleOutline" | "IoSettingsSharp" | 
    "IoAddCircleSharp" | "IoMusicalNotesSharp"| 
    "IoLibrarySharp"

interface IconProps{
    iconName: IconNames, 
    size: number, 
    color?: string
}




const CustomIcon: React.FC<IconProps> = (props: IconProps) => {
    const { iconName, size, color } = props;
    const icon = React.createElement(IonIcon5[iconName]);
    return <div style={{ fontSize: size, color: color }}>{icon}</div>;
};



export default CustomIcon