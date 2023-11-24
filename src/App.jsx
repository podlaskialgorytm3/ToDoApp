import './App.css'
import './tailwind.css';
import {ContentPage} from './components/ContentPage.jsx'
import {TaskContent} from './components/TaskContent.jsx';
import {Card} from './components/Card.jsx'
import {TASK} from './task.js'


function App() {
  return (
      <ContentPage>
          <TaskContent>
            {TASK.map(item => 
                <Card title={item.title} description={item.description} key={item.title} />
            )}
          </TaskContent>
      </ContentPage>
  )
}

export default App
