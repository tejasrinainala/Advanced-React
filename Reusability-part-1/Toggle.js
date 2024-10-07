import React from "react"

const ToggleContext = React.createContext()

export default function Toggle({ children, onToggle }) {
    /**
     * Challenge:
     * 3. In Star.js, pass an onToggle prop to the Toggle
     *    component whose value is a function. That function
     *    can just run a console.log for now.
     * Note: There's more we need to do here, you may notice a
     * small bug we'll need to address later.
     */
    
    const [on, setOn] = React.useState(false)

    function toggle() {
        setOn(prevOn => !prevOn)
    }
    
    React.useEffect(() => {
        onToggle()
    }, [on])

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleContext }
