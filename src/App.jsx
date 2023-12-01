import './App.css';
import './tailwind.css';
import { useState } from 'react';
import { ContentPage } from './components/ContentPage.jsx';
import { TaskContent } from './components/TaskContent.jsx';
import { Card } from './components/Card.jsx';
import { TASK } from './task.js';
import { InputAdd } from './components/InputAdd.jsx';

function App() {
  const [currentTask, setTask] = useState(TASK);

  const handleInput = (e) => {
    if (e.key === 'Enter') {
      const newTask = {
        title: Math.floor(Math.random() * 10000) + 1,
        description: e.target.value,
      };

      setTask((prevTasks) => [...prevTasks, newTask]);
      e.target.value = '';
    }
  };

  return (
    <ContentPage>
      <TaskContent>
        <InputAdd onKeyPress={(e) => handleInput(e)} />
        {currentTask.map((item) => (
          <Card description={item.description} key={item.title} />
        ))}
      </TaskContent>
    </ContentPage>
  );
}

export default App;
