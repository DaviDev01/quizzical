import React, {useState} from "react"
//import Answer from "./Answer"

export default function QandA(props) {
    const [randomNum] = useState(Math.random() - 0.5)
    const newAnswersArray = [...props.answers, props.correctAnswer ].sort(() => randomNum)

    console.log(newAnswersArray)
    return (
        <section className="q-and-a">
            <h3 className="q-and-a--q">{props.question}</h3>
            <div className="q-and-a--a_container">
                <button 
                    disabled={props.showCorrect}
                    style={props.getStyle(newAnswersArray[0])} 
                    onClick={() => props.handleClick(newAnswersArray[0].id, props.objId)} 
                    className="q-and-a--a" 
                >{newAnswersArray[0].answer}  
                </button>

                <button 
                    disabled={props.showCorrect}
                    style={props.getStyle(newAnswersArray[1])} 
                    onClick={() => props.handleClick(newAnswersArray[1].id, props.objId)} 
                    className="q-and-a--a"
                >{newAnswersArray[1].answer}
                </button>

                <button 
                    disabled={props.showCorrect}
                    style={props.getStyle(newAnswersArray[2])} 
                    onClick={() => props.handleClick(newAnswersArray[2].id, props.objId)} 
                    className="q-and-a--a"
                >{newAnswersArray[2].answer}
                </button>

                <button 
                    disabled={props.showCorrect}
                    style={props.getStyle(newAnswersArray[3])} 
                    onClick={() => props.handleClick(newAnswersArray[3].id, props.objId)} 
                    className="q-and-a--a"
                >{newAnswersArray[3].answer}
                </button>
            </div>
        </section> 
    ) 
    
}
                        