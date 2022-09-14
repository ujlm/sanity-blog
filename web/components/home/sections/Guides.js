const Guides = () => {

    return(
        <div className="wf-section" style={{marginTop: '-70px'}}>
        <div className="main-page-container w-container">
            <h2 className="main-page-h2">Guides on how to go from <span className="hacked-text-span">Hacked</span> to <span className="protected-text-span">Protected</span> online</h2>
            <div className="w-dyn-list">
                <div role="list" className="homepage-two-cards w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                        <a href="/protection/start-using-a-password-manager" className="interviews-card-div-block homepage w-inline-block">
                            <div>
                                <div className="card-title">Start using a password manager</div>
                                <div className="interviews-filters-div-block w-clearfix">
                                    <div className="card-filters">Passwords</div>
                                    <div className="card-filters">Cyber hygiene</div>
                                    <div className="card-filters w-dyn-bind-empty"></div>
                                    <div className="card-filters">Tools</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                        <a href="/protection/quick-tip-recognize-email-scam" className="interviews-card-div-block homepage w-inline-block">
                            <div>
                                <div className="card-title">Recognize email scam</div>
                                <div className="interviews-filters-div-block w-clearfix">
                                    <div className="card-filters">Quick tip</div>
                                    <div className="card-filters">Awareness</div>
                                    <div className="card-filters w-dyn-bind-empty"></div>
                                    <div className="card-filters">Spam</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                        <a href="/protection/how-to-delete-and-avoid-ios-calendar-spam" className="interviews-card-div-block homepage w-inline-block">
                            <div>
                                <div className="card-title">How to delete and avoid iOS calendar spam</div>
                                <div className="interviews-filters-div-block w-clearfix">
                                    <div className="card-filters">iOS</div>
                                    <div className="card-filters">Spam</div>
                                    <div className="card-filters w-dyn-bind-empty"></div>
                                    <div className="card-filters">Calendar scam</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                        <a href="/protection/how-to-set-up-two-factor-authentication" className="interviews-card-div-block homepage w-inline-block">
                            <div>
                                <div className="card-title">How set up Two-Factor Authentication (2FA)</div>
                                <div className="interviews-filters-div-block w-clearfix">
                                    <div className="card-filters">Tips</div>
                                    <div className="card-filters">Security</div>
                                    <div className="card-filters w-dyn-bind-empty"></div>
                                    <div className="card-filters">Passwords</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Guides;