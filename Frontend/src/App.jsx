import './App.css'
import Favourites from './Pages/Favourites'
import Home from './Pages/Home'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <main className='mainContent'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/favourites' element={<Favourites/>} />
      </Routes>
    </main>
  )
}

export default App
