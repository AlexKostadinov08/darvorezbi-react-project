import { Link } from "react-router";

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