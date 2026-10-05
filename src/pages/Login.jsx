import { Link } from "react-router";

export default function Login() {
    return (
        <section className="dr-form-card">
            <h1>Вход</h1>
            <p className="dr-form-sub">Влез, за да добавяш изделия и да коментираш.</p>

            <form className="dr-form">
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