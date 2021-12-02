import React, {useEffect, useState} from "react"
import LobbyPage from "./components/LobbyPage"
import QuizPage from "./components/QuizPage"
import {nanoid} from "nanoid"


export default function App(props) {
    const [isQuizShown, setIsQuizShown] = useState(false)
    const [data, setData] = useState([])
    const [showCorrect, setShowCorrect] = useState(false)
    const [rigntAnswers, setRigntAnswers] = useState(0)
    const [randomNum, setrandomNum] = useState(null)

    useEffect( () => {
        getAPIData()
        setrandomNum(Math.floor( Math.random() * 4 ))
    }, [] )

    function getAPIData() {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(resp => resp.json())
            .then(data => {

                setData( data.results.map( (item) =>  ({...item, objId:nanoid(), 
                correctAnswer: { isSelected: false, id: nanoid(), answer: item.correct_answer, isCorrect: true},
                answers: [{ isSelected: false, id: nanoid(), answer: item.incorrect_answers[0], isCorrect: false}, 
                { isSelected: false, id: nanoid(), answer: item.incorrect_answers[1], isCorrect: false}, 
                { isSelected: false, id: nanoid(), answer: item.incorrect_answers[2], isCorrect: false}]
                
            }))) 
            })
        setShowCorrect(false)
        setRigntAnswers(0)
    }

    function showQuizPage() {
        setIsQuizShown(true)
    }

    function handleClick(id, objId) {
        const updatedAnswers = data.map((item) => {
            return item.objId === objId ? 
                    {...item, answers: item.answers.map((answer) => answer.id === id ? {...answer, isSelected: !answer.isSelected} : 
                    {...answer, isSelected: false}), correctAnswer:  item.correctAnswer.id === id  ? {...item.correctAnswer, isSelected: !item.correctAnswer.isSelected} : {...item.correctAnswer, isSelected: false} } : item
        })
        setData(updatedAnswers)
    }

    function showAnswer() {
        showCorrect ? getAPIData() :
        getScore()
    }

    function getScore() {
        setShowCorrect(true)
        data.forEach( (QandAObj) => {
            QandAObj.correctAnswer.isSelected && QandAObj.correctAnswer.isCorrect && setRigntAnswers(prev => prev + 1)
        })
    }

    function getStyle(object) {
        if(object.isSelected && !showCorrect) {
            return {backgroundColor: "#D6DBF5", borderColor: "#D6DBF5"}
        } else if (object.isSelected && showCorrect) { 
            if(object.isCorrect) {
                return {backgroundColor: "#94D7A2", borderColor: "#94D7A2"}             
            } else {
                return {backgroundColor: "#F8BCBC", borderColor: "#F8BCBC", opacity: "0.5"} 
            }
        } else if (!object.isSelected && showCorrect && object.isCorrect) {
            return {backgroundColor: "#94D7A2", borderColor: "#94D7A2"} 
        } else if (!object.isSelected && !object.isCorrect && showCorrect) {
            return {opacity: "0.5"} 
        }
    }
 
    return (
        <div className="outerMostDiv">
            {isQuizShown ===  false ? 
                <LobbyPage showQuizPage={showQuizPage}/> : 
                <QuizPage 
                    data={data} 
                    handleClick={handleClick} 
                    showAnswer={showAnswer} 
                    showCorrect={showCorrect}
                    getStyle={getStyle}
                    rigntAnswers={rigntAnswers}
                    randomNum={randomNum}
                />
            }
        </div>
    )
} 