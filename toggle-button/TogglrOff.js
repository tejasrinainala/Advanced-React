import React from "react"
import {ToggleContext} from "./Toggle"
/**
 * Challenge: Build the Toggle.Off component!
 */
export default function ToggleOff({ children })
{
    const { off } = React.useContext(ToggleContext)
    
    return off ? null : children
}
