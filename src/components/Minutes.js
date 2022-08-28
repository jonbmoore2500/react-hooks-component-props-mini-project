import React from "react"
import Emojis from "./Emojis"

function Minutes({ numberOf }) {

    let mins = numberOf

    return (
        <small> | <Emojis length={mins}/>{mins} minutes</small>
    )

}


export default Minutes