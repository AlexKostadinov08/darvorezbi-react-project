import { Routes, Route } from 'react-router'

import Home from './pages/home/Home'
import Catalog from './pages/catalog/Catalog'
import Login from './pages/Login'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Register from './pages/Register'

function App() {

    return (
        <div className="dr-app">
            <Header />

            <main id="dr-main" className="dr-page">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/catalog' element={<Catalog />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </main>

            <Footer />
        </div>
    )
}

export default App
