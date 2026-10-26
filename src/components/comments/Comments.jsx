import { useState, useEffect, useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { getComments, createComment } from "../../services/commentsService";

import './Comments.css'

export default function Comments({ productId }) {
    const [comments, setComments] = useState([])
    const [text, setText] = useState('')
    const { user } = useContext(AuthContext)

    useEffect(() => {
        const controller = new AbortController()

        getComments(productId, controller.signal)
            .then(result => setComments(result))
            .catch(err => {
                if (!controller.signal.aborted) console.log(err)
            })

        return () => controller.abort()
    }, [productId])

    const submitHandler = async (e) => {
        e.preventDefault()

        try {
            const newComment = await createComment(productId, text.trim(), user.email.split('@')[0])
            setComments(state => [...state, newComment])
            setText('')
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <section className="cm">
            <h2 className="cm-title">Коментари <span className="cm-count">{comments.length}</span></h2>

            {user ? (
                <form className="cm-form" onSubmit={submitHandler}>
                    <textarea
                        className="cm-input"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Напиши коментар..."
                        rows="3"
                    />
                    <button className="dr-btn dr-btn--sm" type="submit" disabled={!text.trim()}>Публикувай</button>
                </form>
            ) : (
                <p className="cm-login"><Link to="/login">Влез</Link>, за да коментираш.</p>
            )}

            {comments.length === 0 ? (
                <p className="cm-empty">Още няма коментари. Бъди първият!</p>
            ) : (
                <ul className="cm-list">
                    {comments.map(c => (
                        <li key={c.id} className="cm-item">
                            <span className="cm-avatar" aria-hidden="true">{c.author_name[0]}</span>
                            <div className="cm-body">
                                <p className="cm-head">
                                    <strong>{c.author_name}</strong>{' '}
                                    <time dateTime={c.created_at}>{new Date(c.created_at).toLocaleDateString('bg-BG')}</time>
                                </p>
                                <p className="cm-text">{c.content}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
