import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import HelloWorld from './01HelloWorld/HelloWorld'
import Counter from './02Counter/Counter'
import Todo from './03TODO/Todo'
import Timer from './04Timer/Timer'
import Calc from './05Calc/Calc'
import Profile from './06Profile/Profile'
import Weather from './07Weather/Weather'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/001" element={<HelloWorld />} />
                <Route path="/002" element={<Counter />} />
                <Route path="/003" element={<Todo />} />
                <Route path="/004" element={<Timer />} />
                <Route path="/005" element={<Calc />}></Route>
                <Route path="/006" element={<Profile />}></Route>
                <Route path="/007" element={<Weather />}></Route>
            </Routes>
        </div>
    )
}

export default App
//npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
