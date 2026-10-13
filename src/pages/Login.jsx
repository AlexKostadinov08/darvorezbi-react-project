import { Link } from "react-router";
import { useNavigate } from "react-router";
import { supabase } from "../services/supabase";

export default function Login() {
    const navigate = useNavigate();

    async function loginHandler(formData) {
        const email = formData.get('email')
        const password = formData.get('password')

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if (error) {
            alert(error.message)
            return;
        }

        navigate('/')
    }



    return (
        <section className="dr-form-card">
            <h1>Вход</h1>
            <p className="dr-form-sub">Влез, за да добавяш изделия и да коментираш.</p>

            <form className="dr-form" action={loginHandler}>
                <div className="dr-field">
                    <label htmlFor="email">Имейл</label>
                    <input id="email" name="email" type="email" placeholder="ivancho@abv.bg" />
                </div>

                <div className="dr-field">
                    <label htmlFor="password">Парола</label>
                    <input id="password" name="password" type="password" />
                </div>

                <button className="dr-btn dr-btn--block" type="submit">Вход</button>
            </form>

            <p className="dr-form-alt">Нямаш профил? <Link to="/register">Регистрация</Link></p>
        </section>
    );
}