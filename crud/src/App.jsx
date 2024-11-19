import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard'
import Products from './pages/Products';

function App() {
  return (
    <>
      <BrowserRouter>
      <Home/>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
