import { Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import HelloWorld from './component/HelloWorld'
import Counter from './component/Counter'
import Todo from './component/Todo'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/001" element={<HelloWorld />} />
        <Route path="/002" element={<Counter />} />
        <Route path="/003" element={<Todo />} />
      </Routes>
    </div>
  )
}

export default App