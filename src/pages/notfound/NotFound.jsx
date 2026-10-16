import { Link } from "react-router";

export default function NotFound() {
    return (
        <section className='dr-notfound'>
            <h1>404 Not Found</h1>
            <Link to='/'>Начало</Link>
        </section>
    );
}