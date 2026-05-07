import './css/App.css'
import Navbar from './Components/Navbar'
import Favourites from './Pages/Favourites'
import Home from './Pages/Home'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/favourites' element={<Favourites/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
