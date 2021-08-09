import React, {useState} from 'react'
import Input from './Input'

export default function Main(props) {

    const [updated, setUpdated] = useState(false)
    const [score, setScore] = useState({
        'left': {
            'mid': 0,
            'wing': 0,
            'turned': 0,
            'self': 0,
        },
        'right': {
            'mid': 0,
            'wing': 0,
            'turned': 0,
            'self': 0,
        }
    })

    return (
        <div id="main">
            
            <div className='teamName'>{props.names[0]}</div>
            <div className='teamName'>VS.</div>
            <div className='teamName'>{props.names[1]}</div>

            <div>
                <Input u={{'func':setUpdated, 'state': updated}} key="1" score={score} func={setScore} for={{'team':'left', 'target':'mid'}}/>
            </div>
            <div>Midterpoint</div>
            <div>
                <Input u={{'func':setUpdated, 'state': updated}} key="2" score={score} func={setScore} for={{'team':'right', 'target':'mid'}}/>
            </div>
            
            <div>
                <Input u={{'func':setUpdated, 'state': updated}} key="3" score={score} func={setScore} for={{'team':'left', 'target':'wing'}}/>
            </div>
            <div>Fløjpoint</div>
            <div>
                <Input u={{'func':setUpdated, 'state': updated}} key="4" score={score} func={setScore} for={{'team':'right', 'target':'wing'}}/>
            </div>
            
            <div className='score'>
                {score.left.mid + score.left.wing * 1.75 - score.left.turned * 2 - score.left.self * 1.5}
            </div>
            <div className='score'>Stilling</div>
            <div className='score'>
                {score.right.mid + score.right.wing * 1.75 - score.right.turned * 2 - score.right.self * 1.5}
            </div>
            
            <div>
                <Input u={{'func':setUpdated, 'state': updated}} key="5" score={score} func={setScore} for={{'team':'left', 'target':'self'}}/>
            </div>
            <div>Selvmål</div>
            <div>
                <Input u={{'func':setUpdated, 'state': updated}} key="6" score={score} func={setScore} for={{'team':'right', 'target':'self'}}/>
            </div>

            <div>
                <Input u={{'func':setUpdated, 'state': updated}} key="7" score={score} func={setScore} for={{'team':'left', 'target':'turned'}}/>
            </div>
            <div>Væltede kopper</div>
            <div>
                <Input u={{'func':setUpdated, 'state': updated}} key="8" score={score} func={setScore} for={{'team':'right', 'target':'turned'}}/>
            </div>

        </div>
    )
}