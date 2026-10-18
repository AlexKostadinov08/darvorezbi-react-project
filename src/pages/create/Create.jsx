import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { create } from "../../services/productsService";

export default function Create() {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

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

        const payload = {
            title: values.title,
            category: values.category,
            price: Number(values.price),
            image_url: values.image_url,
            description: values.description,
            author_name: user.email.split('@')[0]
        }

        const result = await create(payload)

        navigate(`/catalog/${result.id}`)
    
    }


    return (
        <section className="dr-form-card dr-form-card--wide">

            <h1>Сподели своя дърворезба с другите!</h1>
            <p className="dr-form-sub">Влез, за да добавяш изделия.</p>

            <form className="dr-form" onSubmit={submitHandler} noValidate>

                <div className="dr-field">
                    <label htmlFor="title">Заглавие на изделието</label>
                    <input id="title" name="title" type="text" value={values.title} onChange={changeHandler} />
                </div>
                <div className="dr-field">
                    <label htmlFor="category">Категория</label>
                    <select id="category" name="category" value={values.category} onChange={changeHandler}>
                        <option value="">Избери категория</option>
                        <option value="Фигура">Фигура</option>
                        <option value="Пано">Пано</option>
                    </select>
                </div>
                <div className="dr-field">
                    <label htmlFor="price">Цена</label>
                    <input id="price" name="price" type="number" value={values.price} onChange={changeHandler} />
                </div>
                <div className="dr-field">
                    <label htmlFor="image_url">Връзка на изображението</label>
                    <input id="image_url" name="image_url" type="url" value={values.image_url} onChange={changeHandler} />
                </div>
                <div className="dr-field">
                    <label htmlFor="description">Описание</label>
                    <textarea id="description" name="description" value={values.description} onChange={changeHandler} />
                </div>

                <button className="dr-btn dr-btn--block" type="submit">Добави</button>
            </form>

        </section>
    );
}