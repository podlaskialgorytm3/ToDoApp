import './App.css'
import './tailwind.css';
import { useState } from 'react';
import {ContentPage} from './components/ContentPage.jsx'
import {TaskContent} from './components/TaskContent.jsx';
import {Card} from './components/Card.jsx'
import {TASK} from './task.js'
import { InputAdd } from './components/InputAdd.jsx';

function App() {
  const [currentTast,setTask] = useState(TASK)
  const handleInput = (e) => {
    let newTask = e.target.value
    if(e.key === 'Enter'){
      currentTast.push({
        title: Math.floor(Math.random() * (10000)) + 1,
        description: newTask
      })
      console.log(currentTast)
      setTask(currentTast)
    }
  }
  return (
      <ContentPage>
          
          <TaskContent>
          <InputAdd onKeyPress={(e) => handleInput(e)}/>
            {currentTast.map(item => 
                <Card description={item.description} key={item.title} />
            )}
          </TaskContent>
      </ContentPage>
  )
}

export default App
