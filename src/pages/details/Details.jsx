import { useEffect, useState } from 'react';
import { getOne } from '../../services/productsService';
import { Link, useParams } from 'react-router';

import './Details.css'

export default function Details() {

    const { productId } = useParams();
    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController()

        getOne(productId, controller.signal)
            .then(result => setProduct(result))
            .catch(err => {
                if (!controller.signal.aborted) setError(err.message)
            })
            .finally(() => {
                if (!controller.signal.aborted) setIsLoading(false)
            })

        return () => controller.abort()
    }, [productId])

    return (
        <article className="dr-container">

            {isLoading && (
                <div className="dr-loader" role='status'>
                    <span className="dr-spinner" aria-hidden='true'></span>
                    <span>Зареждане.. Моля изчакайте</span>
                </div>
            )}

            {error && (
                <div className="dr-alert--error dr-alert" role='alert'>
                    <strong>Изделието не беше намерено</strong>
                    <Link to='/catalog'>Обратно към каталога</Link>
                </div>
            )}

            {!isLoading && !error && product && (
                <section className="dd-top">
                    <div className="dd-media">
                        <img src={product.image_url} alt={product.title} width="800" height="600" />
                    </div>
                    <div className="dd-info">
                        <p className="dr-kicker">{product.category}</p>
                        <h1>{product.title}</h1>
                        <p className="dd-price">{product.price} €</p>
                        <p className="dd-meta">Добавено от <strong>{product.author_name}</strong></p>
                        <p className="dd-lede">{product.description}</p>
                    </div>
                </section>
            )}
        </article>
    );
}