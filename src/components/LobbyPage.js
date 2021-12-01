import React from "react"
import blob5 from "../images/blob-5.png"
import blob4 from "../images/blob-4.png"

export default function LobbyPage(props) {
    const styles = {
        backgroundImage: `url(${blob5}), url(${blob4})`,
        backgroundRepeat:  "no-repeat, no-repeat",
        backgroundPosition: "bottom left, top right"
    } 

    return (
        <section className="lobbyPage" style={styles}>
            <h1 className="lobbyPage--h1">Quizzical</h1>
            <p className="lobbyPage--p">Trivia Questions For Everyone</p>
            <button onClick={props.showQuizPage} className="lobbyPage--btn">Start quiz</button>
        </section>
    )
} 