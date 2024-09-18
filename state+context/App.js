import React from "react"
import Header from "./Header"
import Button from "./Button"

const ThemeContext = React.createContext()

export default function App() {
    const [theme, setTheme] = React.useState("light")
    function toggleTheme()
    {
        setTheme("dark")
    }
    /**
     * Challenge part 2:
     * Create a `toggleTheme` function to that uses `setTheme`
     * to change the value from "light" to "dark" and vice versa.
     */
    
    return (
        <ThemeContext.Provider value={theme}>
            <div className="container dark-theme">
                <Header />
                <Button />
            </div>
        </ThemeContext.Provider>
    )
}

export { ThemeContext }
