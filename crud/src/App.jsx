import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard'
import Products from './pages/Products';
import Inventory from './pages/Inventory';
import Supplier from './pages/Supplier';

function App() {
  return (
    <>
      <BrowserRouter>
      <Home/>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/inventory' element={<Inventory/>}/>
          <Route path='/suppliers' element={<Supplier/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
