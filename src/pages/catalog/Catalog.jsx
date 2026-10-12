import { useEffect, useState } from 'react'
import { getAll } from '../../services/productsService'
import { Link } from 'react-router'

import './Catalog.css'

export default function Catalog() {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController()

        getAll(controller.signal)
            .then(result => setProducts(result))
            .catch(err => {
                if (err.name !== 'AbortError') setError(err.message)
            })
            .finally(() => setIsLoading(false))

        return () => controller.abort()
    }, [])

    return (
        <div className="dr-container">
            <header className="dr-page-head">

            </header>

            {isLoading && (
                <div className="dr-loader" role='status'>
                    <span className="dr-spinner" aria-hidden='true'></span>
                    <span>Зареждане.. Моля изчакайте</span>
                </div>
            )}

            {error && (
                <div className="dr-alert--error dr-alert" role='alert'>
                    <strong>{error}</strong> Моля, опитайте отново
                </div>
            )}

            {!isLoading && !error && products.length !== 0 && (
                <ul className="dc-grid">
                { products.map(product => (
                    <li key={product.id}>
                        <article className="dc-card">
                            <Link to={`/catalog/${product.id}`} className="dc-card-link">
                                <div className="dc-card-media">
                                    <img src={product.image_url} alt={product.title} width="600" height="450" loading="lazy" />
                                    <span className="dc-card-badge">{product.category}</span>
                                </div>
                                <div className="dc-card-body">
                                    <h3 className="dc-card-title">{product.title}</h3>
                                    <p className="dc-card-text">{product.description}</p>
                                    <div className="dc-card-foot">
                                        <span className="dc-card-price">{product.price} €</span>
                                        {/* <span className="dc-card-likes">♥ {}</span> */}
                                    </div>
                                </div>
                            </Link>
                        </article>
                    </li>
                    ))}
                </ul>
            )}

            {!isLoading && !error && products.length === 0 && (
                <div className="dr-empty">
                    <span className="dr-empty-mark" aria-hidden="true"></span>
                    <h2>Още няма изделия</h2>
                    <p>Бъди първият, който добави.</p>
                    <Link className="dr-btn" to="/create">Добави изделие</Link>
                </div>
            )}
        </div>
    );
}