import React, {useState} from 'react'

export default function Input(props) {



    return (
        <div className="inputBtn">
            <span 
                onClick={() =>{
                    let newScore = props.score;
                    newScore[props.for.team][props.for.target] -= 1;
                    props.func(newScore)
                    props.u.func(!props.u.state)
                }}
                className={props.score[props.for.team][props.for.target] <= 0 ? 'hidden left' : 'left'}
            >-</span>
            <div>{props.score[props.for.team][props.for.target]}</div>
            <span 
                onClick={() =>{
                    let newScore = props.score;
                    newScore[props.for.team][props.for.target] += 1;
                    props.func(newScore)
                    props.u.func(!props.u.state)
                }}
                className='right'
            >+</span>
        </div>
    )
}