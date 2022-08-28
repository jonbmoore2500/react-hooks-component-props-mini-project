import React from "react"

function About({ image = "https://via.placeholder.com/215", alternative, text }) {

    return (
        <aside>
            <img src={image} alt={alternative} />
            <p>{text}</p>
        </aside>
    )

}

export default About