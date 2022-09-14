const Footer = () => {

    return (
        <div className="footer wf-section">
            <div className="container-footer w-container">
                <div className="w-row">
                    <div className="w-col w-col-5">
                        <div className="footer-logo-div-block"><img src="https://uploads-ssl.webflow.com/618503314369874a4212f180/61d3257de0e0147f4f908b23_scamradario_logowhite.png" loading="lazy" height="30" alt="scamradar white logo" className="logo" />
                        </div>
                        <p className="footer-description">A blogging and reporting site with useful tips on how to protect against fraud and scams. We publish stories that help you think like the attacker.</p>
                    </div>
                    <div className="w-col w-col-7">
                        <div className="w-row">
                            <div className="w-col w-col-8 w-col-medium-8 w-col-small-8">
                                <div className="w-row">
                                    <div className="w-col w-col-6 w-col-small-6 w-col-tiny-6">
                                        <div className="footer-category">Pages</div>
                                        <a href="/scam-alert" className="footer-links">Scam alert</a>
                                        <a href="/scam-stories" className="footer-links">Scam Stories</a>
                                        <a href="/insights" className="footer-links">Insights</a>
                                        <a href="/protection" className="footer-links">Protection</a>
                                        <a href="/report-scam" className="footer-links">Report Scam</a></div>
                                </div>
                            </div>
                            <div className="w-col w-col-4 w-col-medium-4 w-col-small-4">
                                <div className="footer-category">Connect</div>
                                <a href="https://twitter.com/scamradario" className="footer-links" target="_blank">Twitter</a>
                                <a href="https://www.instagram.com/scamradario/" className="footer-links" target="_blank">Instagram</a>
                                <a href="mailto:game.stuff776@gmail.com" className="footer-links" target="_blank">Email</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;