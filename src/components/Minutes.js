import React from "react"

function Minutes({ minutes }) {
    let emoji5 = '☕️';
    let emoji10 = '🍱';
    let dispEmoji = ''
    let emojiList = []
    if (minutes < 30) {
        dispEmoji = emoji5
        for (let i=0; i < Math.ceil(minutes/5); i++) {
            emojiList.push(dispEmoji)
        }
    } else {
        dispEmoji = emoji10
        for (let i=0; i < Math.ceil(minutes/10); i++) {
            emojiList.push(dispEmoji)
        }
    }
    
    return (
        <small> | {emojiList.join(' ')} | {minutes} minutes</small>
    )

}


export default Minutes