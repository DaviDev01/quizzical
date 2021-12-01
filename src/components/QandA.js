import React, {useState} from "react"
import Answer from "./Answer"

export default function QandA(props) {
    const [randomNum] = useState(Math.random() - 0.5)
    const newAnswersArray = [...props.answers, props.correctAnswer ].sort(() => randomNum)

    const options = newAnswersArray.map( (answer) => (
        <Answer 
        key={answer.id}
        showCorrect={props.showCorrect}
        getStyle={props.getStyle}
        answerObj={answer}
        handleClick={props.handleClick}
        objId={props.objId}
        />        
    ))

    return (
        <section className="q-and-a">
            <h3 className="q-and-a--q" dangerouslySetInnerHTML={{__html:props.question }} />
            <div className="q-and-a--a_container">
                {options}
            </div>
        </section> 
    ) 
    
}
                        