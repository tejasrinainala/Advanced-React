import React from "react"
import Header from "./Header"
import Button from "./Button"

/**
 * Challenge: set up the context again on your own!
 

export default function App() {
    return (
        <div className="container dark-theme">
            <Header />
            <Button />
        </div>
    )
}
*/

export default function App() {
    return (
        <ThemeContext.Provider value="dark">
            <div className="container dark-theme">                                    //solution
                <Header />
                <Button />
            </div>
        </ThemeContext.Provider>
    )
}

export { ThemeContext }
