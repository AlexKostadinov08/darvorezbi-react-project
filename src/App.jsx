import { Routes, Route } from 'react-router'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Catalog from './pages/catalog/Catalog'
import Home from './pages/home/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Details from './pages/details/Details'
import Create from './pages/create/Create'
import NotFound from './pages/notfound/NotFound'

import PrivateGuard from './guards/PrivateGuard'
import GuestGuard from './guards/GuestGuard'

function App() {

    return (
        <div className="dr-app">
            <Header />

            <main id="dr-main" className="dr-page">
                <Routes>

                    <Route path='/' element={<Home />} />

                    <Route path='/catalog' element={<Catalog />} />

                    <Route element={<PrivateGuard />}>
                        <Route path='/create' element={<Create />} />
                    </Route>

                    <Route element={<GuestGuard />}>
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Route>

                    <Route path='/catalog/:productId' element={<Details />} />

                    <Route path='*' element={<NotFound />} />

                </Routes>
            </main>

            <Footer />
        </div>
    )
}

export default App
