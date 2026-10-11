import { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { supabase } from "../services/supabase";

export default function Register() {
    const [values, setValue] = useState({ email: '', password: '', retypePassword: '' });
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setValue(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const registerHandler = async (e) => {
        e.preventDefault();

        const { email, password, retypePassword } = values

        if (!email || !password || !retypePassword) {
            alert("All fields are required!")
            return;
        }

        if (password !== retypePassword) {
            alert("Passwords do not match!")
            return;
        }

        const { data, error } = await supabase.auth.signUp({ email, password });        

        if (error) {
            alert(error.message);
            return;
        }

        console.log(data.user);
        navigate('/')
    }



    return (
        <section className="dr-form-card">
            <h1>Регистрация</h1>
            <p className="dr-form-sub">Създай профил, за да добавяш изделия, да харесваш и да коментираш.</p>

            <form className="dr-form" onSubmit={registerHandler}>
                <div className="dr-field">
                    <label htmlFor="email">Имейл</label>
                    <input id="email" name="email" type="email" value={values.email} onChange={changeHandler} placeholder="ime@primer.bg" />
                </div>

                <div className="dr-field">
                    <label htmlFor="password">Парола</label>
                    <input id="password" name="password" type="password" value={values.password} onChange={changeHandler} />
                    <p className="dr-field-hint">Поне 6 символа</p>
                </div>

                <div className="dr-field">
                    <label htmlFor="retypePassword">Повтори паролата</label>
                    <input id="retypePassword" name="retypePassword" type="password" value={values.retypePassword} onChange={changeHandler} />
                </div>

                <button className="dr-btn dr-btn--block" type="submit">Регистрация</button>
            </form>

            <p className="dr-form-alt">Имаш профил? <Link to="/login">Вход</Link></p>
        </section>
    );
}