import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

import { NavBar } from "./components/NavBar";
import { ItemListConteiner } from "./components/ItemListConteiner";
import { Error404 } from './components/Error404';
import { ItemDetailConteiner } from './components/ItemDetailConteiner';

// funcion principal
function App() {

  return (
  <BrowserRouter>
  <NavBar />
  <Routes>
    <Route path='/' element={<ItemListConteiner  greeting="Productos" />} />
    <Route path='/category/:id' element={<ItemListConteiner />} />
    <Route path='/items/:id' element={<ItemDetailConteiner/>} />
    <Route path='*' element={<Error404 />} />
  </Routes>
  </BrowserRouter>
  )
}
export default App
