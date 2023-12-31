function Header() {
    return <nav className="lime darken-1" style={{ position: 'fixed', zIndex: 5 }}>
        <div className="container">
            <div className="nav-wrapper">
                <a href="!#"
                    className="brand-logo">React Shop</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="!#">Repository</a></li>
                </ul>
            </div>
        </div>
    </nav>
}
export { Header };