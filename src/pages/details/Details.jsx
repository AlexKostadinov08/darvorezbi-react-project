import { useContext, useEffect, useState } from 'react';
import { getOne, remove } from '../../services/productsService';
import { Link, useParams, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import Comments from '../../components/comments/Comments';
import { getLikes, like, unlike } from '../../services/likesService';

import './Details.css'

export default function Details() {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [likes, setLikes] = useState([])

    const { productId } = useParams();
    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const isOwner = user && product && user.id === product.user_id;
    const likesCount = likes.length
    const isLiked = !!user && likes.some(l => l.user_id === user.id)

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

        getLikes(productId, controller.signal)
            .then(result => setLikes(result))
            .catch(err => {
                if (!controller.signal.aborted) console.log(err)
            })

        return () => controller.abort()
    }, [productId])

    async function likeHandler() {
        try {
            if (isLiked) {
                await unlike(productId, user.id)
                setLikes(state => state.filter(l => l.user_id !== user.id))
                return
            }

            await like(productId)
            setLikes(state => [...state, { user_id: user.id }])
        } catch (err) {
            alert(err.message)
        }
    }

    async function deleteHandler() {
        if (!confirm("Сигурни ли сте, че искате да изтриете това изделие?")) return

        try {
            await remove(productId)
            navigate('/catalog')
        } catch (err) {
            alert(err.message)
        }
    }

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
                        <div className="dd-bar">
                            <button className={`dd-like ${isLiked ? 'is-liked' : ''}`} aria-pressed={isLiked} type="button" onClick={likeHandler} disabled={!user || isOwner}>
                                <span className="dd-like-heart" aria-hidden="true"></span>
                                Харесай <span className="dd-like-count">{likesCount}</span>
                            </button>
                            {isOwner && <p className="dd-meta">Не можеш да харесаш собственото си изделие</p>}
                            {!user && <p className="dd-meta"><Link to="/login">Влез</Link>, за да харесаш</p>}
                            {isOwner && (
                                <div className="dr-actions">
                                    <Link className="dr-btn dr-btn--ghost dr-btn--sm" to={`/catalog/${product.id}/edit`}>Редактирай</Link>
                                    <button className="dr-btn dr-btn--danger dr-btn--sm" type="button" onClick={deleteHandler}>Изтрий</button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}
            {product && (
                <Comments productId={productId} />
            )}
        </article>
    );
}