// About Us class
class AboutUs extends React.Component {
    // Render method
    render() {
        return [<Header />, <Main />, <Footer />];
    }
}
// Header class
class Header extends AboutUs {
    // Render method
    render() {
        return (
            <header>
                <div id="companyLogo">
                    <a href="../">
                        <img src="../Images/Logo.png" />
                    </a>
                </div>
                <nav>
                    <div>
                        <a href="./"> About Us </a>
                    </div>
                    <div>
                        <a href="../OurServices"> Our Services </a>
                    </div>
                </nav>
            </header>
        );
    }
}
// Main class
class Main extends AboutUs {
    // Render method
    render() {
        return (
            <main>
                <div id="companyProfile">
                    <h1>Rakatoo Associates Limited</h1>
                    <img src="../Images/Logo.png" alt="Company Image" />
                    <div>
                        Rakatoo Associates Limited was founded to cater for the
                        increasing needs for small and medium companies by
                        providing technical advice and assistance.
                    </div>
                </div>
                <div id="members">
                    <div id="rakatoo">
                        <img src="../Images/Logo.png" alt="Member Image" />
                        <a href="./Dev Rakatoo">Dev Rakatoo</a>
                    </div>
                </div>
            </main>
        );
    }
}
// Footer class
class Footer extends AboutUs {
    // Render method
    render() {
        return (
            <footer>
                <div id="contactDetails">
                    <h1>Contact Us!</h1>
                    <div id="contactDetailsBar">
                        <div>
                            <h4>Telephone:</h4>
                            <a href="tel:4340944"> 434 0944 </a>
                        </div>
                        <div>
                            <h4>E-Mail:</h4>
                            <a href="mailto:dev@rakatooassociatesltd.com">
                                dev@rakatooassociatesltd.com
                            </a>
                        </div>
                        <div class="Contact">
                            <h4>Address:</h4>
                            <a
                                href="https://www.google.com/maps/@-20.2176557,57.4889725,19z?hl=en"
                                target="_blank"
                                class="ContactLink"
                            >
                                Mount Ory, Moka
                            </a>
                        </div>
                    </div>
                </div>
                <div id="socialNetworkServicesBar">
                    <a
                        href="https://www.facebook.com/pg/RakatooConsultingLtd"
                        target="_blank"
                    >
                        <i class="fa fa-facebook faFacebook"></i>
                    </a>
                </div>
                <div id="copyright">Rakatoo Associates Ltd ?? 2021</div>
            </footer>
        );
    }
}
// Rendering About Us
ReactDOM.render(<AboutUs />, document.getElementById("app"));
