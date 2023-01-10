import React from "react"
import ReactDOM from "react-dom"


function App() {
    return (
        <div>
            <ul>
                <li>Thing 1</li>
                <li>Thing 2</li>
                <li>Thing 3</li>
            </ul>
        </div>
    )
}

ReactDOM.render(
    <App />, document.getElementById("root")
)