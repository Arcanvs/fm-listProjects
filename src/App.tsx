import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { ListProjects } from './components/pages';
import 'antd/dist/reset.css';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/fm-listProjects/' element={<ListProjects />} />
            <Route
                path="*"
                element={<Navigate to="/fm-listProjects/" replace />}
            />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
