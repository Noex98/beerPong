import React, {useState} from 'react';
import Main from './components/Main';
import Intro from './components/Intro';
import Background from './components/Background';



export default function App() {

  const [names, setNames] = useState([]);

  return (
    <div id="center">
        <Background />
        {names.length === 2 ? <Main names={names}/> : <Intro func={setNames} />}
    </div>
  )
}