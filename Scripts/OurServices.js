// Header class
class Header extends React.Component {
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
                        <a href="../OurServices/"> Our Services </a>
                    </div>
                </nav>
            </header>
        );
    }
}
// Main class
class Main extends React.Component {
    // Render method
    render() {
        return <main></main>;
    }
}
// Footer class
class Footer extends React.Component {
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
                        <img src="./Images/Facebook.png" alt="Facebook" />
                    </a>
                </div>
                <div id="copyright">Rakatoo Associates Ltd © 2021</div>
            </footer>
        );
    }
}
// Our Services class
class OurServices extends React.Component {
    // Render method
    render() {
        return [<Header />, <Main />, <Footer />];
    }
}
// Rendering Our Services
ReactDOM.render(<OurServices />, document.getElementById("app"));
