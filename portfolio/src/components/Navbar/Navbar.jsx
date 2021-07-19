import "./navbar.scss"

export default function Navbar() {
    return (
        <div className="navbar">
            <h1 className="navh1">Jason Mueller</h1>
            <ul className="navlist">
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
    )
};
