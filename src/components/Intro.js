import React from 'react'

export default function Intro(props) {

    function start(){
        let input_1 = document.getElementById('intro__input1').value;
        let input_2 = document.getElementById('intro__input2').value;

        if (input_1.length > 1 && input_2.length > 1){
            props.func([input_1, input_2])
        }
    }

    return (
        <div id="intro">
            <input autoComplete="off" id="intro__input1" type="text" placeholder="Team 1"/>
            <span>VS.</span>
            <input autoComplete="off" id="intro__input2" type="text" placeholder="Team 2"/>
            <button onClick={start}>Start</button>
        </div>
    )
}
