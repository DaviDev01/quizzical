import React from "react"

export default function Answer(props) {
    return (
        <button 
            disabled={props.showCorrect}
            style={props.getStyle(props.answerObj)} 
            onClick={() => props.handleClick(props.answerObj.id, props.objId)} 
            className="q-and-a--a" 
            dangerouslySetInnerHTML={{__html: props.answerObj.answer }}
        />
    )
}