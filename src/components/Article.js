import React from "react"
// import Minutes from "./Minutes"

function Article({ title, date="January 1, 1970", prev, minuteCount }) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            {/* <Minutes numberOf={minuteCount}/> */}
            <p>{prev}</p>
        </article>
    )
}

export default Article