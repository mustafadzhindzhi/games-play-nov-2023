import { Link } from "react-router-dom" // сменяме всички <а с Link и всички href ги сменяме с to

export default function Header() { 
    return (
        <header>
        <h1><Link className="home" to="/">GamesPlay</Link></h1>
        <nav>
            <Link to="/games">All games</Link>
            <div id="user">
                <a to="/games/create">Create Game</a>
                <a to="/logout">Logout</a>
            </div>
            <div id="guest">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    </header>
    )
};