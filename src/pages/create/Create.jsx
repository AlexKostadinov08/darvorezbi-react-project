import { useState, useContext } from "react";
import { useNavigate } from "react-router";

import { AuthContext } from "../../contexts/AuthContext";
import { create } from "../../services/productsService";
import { validate } from "../../utils/validateProduct";

export default function Create() {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [isPending, setIsPending] = useState(false)
    const [serverError, setServerError] = useState(null)

    const [values, setValue] = useState({
        title: '',
        category: '',
        price: '',
        image_url: '',
        description: ''
    })

    const changeHandler = (e) => {
        setValue(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        const validationErrors = validate(values)
        setErrors(validationErrors)
        if (Object.keys(validationErrors).length > 0) return

        const payload = {
            title: values.title,
            category: values.category,
            price: Number(values.price),
            image_url: values.image_url,
            description: values.description,
            author_name: user.email.split('@')[0]
        }

        setIsPending(true)

        try {
            const result = await create(payload)

            navigate(`/catalog/${result.id}`)
        } catch (err) {
            setServerError(err.message)
            setIsPending(false)
        }

    }


    return (
        <section className="dr-form-card dr-form-card--wide">

            <h1>Добави изделие</h1>
            <p className="dr-form-sub">Сподели своя дърворезба с другите!</p>

            <form className="dr-form" onSubmit={submitHandler} noValidate>

                <div className={`dr-field ${errors.title ? 'has-error' : ''}`}>
                    <label htmlFor="title">Заглавие на изделието</label>
                    <input id="title" name="title" type="text" value={values.title} onChange={changeHandler} />
                    {errors.title && <p className="dr-field-error">{errors.title}</p>}
                </div>
                <div className={`dr-field ${errors.category ? 'has-error' : ''}`}>
                    <label htmlFor="category">Категория</label>
                    <select id="category" name="category" value={values.category} onChange={changeHandler}>
                        <option value="">Избери категория</option>
                        <option value="Фигура">Фигура</option>
                        <option value="Пано">Пано</option>
                    </select>
                    {errors.category && <p className="dr-field-error">{errors.category}</p>}
                </div>
                <div className={`dr-field ${errors.price ? 'has-error' : ''}`}>
                    <label htmlFor="price">Цена</label>
                    <input id="price" name="price" type="number" value={values.price} onChange={changeHandler} />
                    {errors.price && <p className="dr-field-error">{errors.price}</p>}
                </div>
                <div className={`dr-field ${errors.image_url ? 'has-error' : ''}`}>
                    <label htmlFor="image_url">Връзка на изображението</label>
                    <input id="image_url" name="image_url" type="url" value={values.image_url} onChange={changeHandler} />
                    {errors.image_url && <p className="dr-field-error">{errors.image_url}</p>}
                </div>
                <div className={`dr-field ${errors.description ? 'has-error' : ''}`}>
                    <label htmlFor="description">Описание</label>
                    <textarea id="description" name="description" value={values.description} onChange={changeHandler} />
                    {errors.description && <p className="dr-field-error">{errors.description}</p>}
                </div>

                {serverError && <div className="dr-alert dr-alert--error">{serverError}</div>}
                
                <button className="dr-btn dr-btn--block" type="submit" disabled={isPending}>
                    {isPending ? 'Добавяне...' : 'Добави'}
                </button>


            </form>

        </section>
    );
}