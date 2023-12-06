import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Nav from './components/Nav'
import ViewTodo from './pages/ViewTodo'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <h1>my app</h1>
        <Nav />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route 
          // dynamic :id
            path='/:id'
            element={<ViewTodo />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App