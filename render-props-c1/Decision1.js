import React from "react"


// Challenge : Think what to render!



export default function Decision({ render }) {
    const [goingOut, setGoingOut] = React.useState(false)

    function toggleGoingOut() {
        setGoingOut(prev => !prev)
    }

    return (
        <div>
            <button onClick={toggleGoingOut}>Change mind</button>
            {render(goingOut)}
        </div>
    )
}
