const { default: Link } = require("next/link")

const Header = ({ color }) => {
    return(
        <>
        <div data-collapse="small" data-animation="over-right" data-duration="600" data-easing="ease" data-easing2="ease" role="banner" className={`${ color == "black" ? "navbar-black" : "navbar"} w-nav`}>
            <div className="container w-container">
                <Link href="/">
                <a aria-current="page" className="brand-link w-nav-brand w--current"  style={color == 'black' ? {color: '#fff'} : {}} >
                Scamradar<span className="logo-ext">.io</span>
            </a>
                </Link>
                <nav role="navigation" className="nav-menu w-nav-menu" style={color == 'black' ? {color: '#fff', background: '#000'} : {}} >
                    <a href="/scam-alert" className={`${color == "black" ? "nav-link-black" : "nav-link"} w-nav-link`} >Scam alert</a>
                    <a href="/insights" className={`${color == "black" ? "nav-link-black" : "nav-link"} w-nav-link`}>Insights</a>
                    <a href="/" className={`${color == "black" ? "nav-link-black" : "nav-link"} w-nav-link`}>Stories</a>
                    <a href="/protection/" className={`${color == "black" ? "nav-link-black" : "nav-link"} w-nav-link`}>Protection</a>
                    <a href="/report-scam" className={`${color == "black" ? "nav-link-black" : "nav-link"} w-nav-link`}>Report Scam</a>
                </nav>
            </div>
        </div>
        </>
    )
}

export default Header;