import { Link } from 'react-router'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="df">
            <div className="dr-container df-top">

                <div className="df-brand">
                    <Link to='/' className="df-logo">ДЪРВОРЕЗБИ</Link>
                    <p>Ръчно изработени дърворезби от работилница в Пазарджик. Всяко изделие е единствено по рода си.</p>
                </div>

                <nav className="df-col" aria-label="Навигация във футъра">
                    <h2 className="df-h">Разгледай</h2>
                    <ul>
                        <li><Link to="/">Начало</Link></li>
                        <li><Link to="/catalog">Каталог</Link></li>
                        <li><Link to="/login">Вход</Link></li>
                    </ul>
                </nav>

                <div className="df-col">
                    <h2 className="df-h">Контакти</h2>
                    <ul>
                        <li><a href="tel:+359898910633">+359 898 910 633</a></li>
                        <li>Работилница в Пазарджик</li>
                    </ul>
                </div>

            </div>

            <div className="df-bottom">
                <div className="dr-container">© {new Date().getFullYear()} Дърворезби · SoftUni React проект</div>
            </div>
        </footer>
    );
}