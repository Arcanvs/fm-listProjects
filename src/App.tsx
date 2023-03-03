import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { ListProjects, Project } from './components/pages';
import './App.css'


function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<ListProjects />} />
            <Route path='/project/:data' element={<Project />} />
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
