import React from "react"
import blob7 from "../images/blob7.png"
import blob8 from "../images/blob8.png"
import QandA from "./QandA"
const styles = {
    backgroundImage: `url(${blob7}), url(${blob8})`,
    backgroundRepeat:  "no-repeat, no-repeat",
    backgroundPosition: "bottom left, top right"
}

export default function QuizPage(props) {
    const QsAndAs = props.data.map( (dataItem) => {
        return <QandA 
                    key={dataItem.objId} 
                    objId={dataItem.objId} 
                    question={dataItem.question} 
                    correctAnswer={dataItem.correctAnswer} 
                    answers={dataItem.answers}
                    handleClick={props.handleClick}
                    showCorrect={props.showCorrect}
                    getStyle={props.getStyle}
                    randomNum={props.randomNum}
                />
    })
    
    return (
        <main className="quizPage" style={styles}>
            {QsAndAs}
            <div className="scoreNbtn">
                {props.showCorrect && <h4 className="scoreNbtn--score">You scored {props.rigntAnswers}/5 correct answers</h4>}
                <button onClick={props.showAnswer} className="q-and-a--btn">{!props.showCorrect ? "Check answers" : "Play again"}</button>
            </div>
        </main>
    )
}