import { useEffect, useState } from 'react'
import { getAll } from '../../services/productsService'
import { Link, useSearchParams } from 'react-router'

import './Catalog.css'

export default function Catalog() {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    // Търсенето живее в адреса (/catalog?search=петле), за да работи и от хедъра, и при F5
    const [searchParams, setSearchParams] = useSearchParams()
    const search = searchParams.get('search') || ''
    const query = search.trim().toLowerCase()

    const visibleProducts = products.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    )

    function searchChangeHandler(e) {
        const value = e.target.value
        setSearchParams(value ? { search: value } : {}, { replace: true })
    }

    useEffect(() => {
        const controller = new AbortController()

        getAll(controller.signal)
            .then(result => setProducts(result))
            .catch(err => {
                if (!controller.signal.aborted) setError(err.message)
            })
            .finally(() => {
                if (!controller.signal.aborted) setIsLoading(false)
            })

        return () => controller.abort()
    }, [])

    return (
        <div className="dr-container">
            <header className="dr-page-head">
                <p className="dr-kicker">Каталог</p>
                <h1>{query ? `Резултати за „${search.trim()}“` : 'Всички изделия'}</h1>
            </header>

            <div className="dc-toolbar">
                <label className="dc-search">
                    <span className="dr-sr-only">Търсене</span>
                    <input type="search" placeholder="Търси изделие..." value={search} onChange={searchChangeHandler} />
                </label>
                {!isLoading && !error && <p className="dc-count">{visibleProducts.length} изделия</p>}
            </div>

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

            {!isLoading && !error && visibleProducts.length !== 0 && (
                <ul className="dc-grid">
                    {visibleProducts.map(product => (
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

            {!isLoading && !error && products.length !== 0 && visibleProducts.length === 0 && (
                <div className="dr-empty">
                    <span className="dr-empty-mark" aria-hidden="true"></span>
                    <h2>Няма намерени изделия</h2>
                    <p>Опитай с друга дума или разгледай всички изделия.</p>
                    <button className="dr-btn" type="button" onClick={() => setSearchParams({})}>Покажи всички</button>
                </div>
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