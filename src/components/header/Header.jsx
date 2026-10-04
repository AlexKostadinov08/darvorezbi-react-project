import { Link } from "react-router";
import './Header.css'

export default function Header() {
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/catalog'>Catalog</Link>
                <Link to='/login'>Login</Link>
            </nav>
        </header>
    );
}