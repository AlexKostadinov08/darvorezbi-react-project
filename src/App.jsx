import { Routes, Route } from 'react-router'

import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Login from './pages/Login'
import Header from './components/Header'

function App() {

    return (
        <main>
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </main>
    )
}

export default App
