// Dev Rakatoo class
class DevRakatoo extends React.Component {
    // Render method
    render() {
        return [<Header />, <Main />, <Footer />];
    }
}
// Header class
class Header extends DevRakatoo {
    // Render method
    render() {
        // Variables
        let domain = "http://stormysystem.ddns.net/Rakatoo Associates Limited";
        return (
            <header>
                <div id="companyLogo">
                    <a href={domain}>
                        <img src={domain + "/Images/Logo.png"} />
                    </a>
                </div>
                <nav>
                    <div>
                        <a href="../"> About Us </a>
                    </div>
                    <div>
                        <a href={domain + "/OurServices"}>Our Services</a>
                    </div>
                </nav>
            </header>
        );
    }
}
// Main class
class Main extends DevRakatoo {
    // Render method
    render() {
        // Variables
        let domain = "http://stormysystem.ddns.net/Rakatoo Associates Limited/";
        return (
            <main>
                <h1>Dev Rakatoo</h1>
                <div id="data">
                    <div id="profilePicture">
                        <img
                            src={domain + "/Images/Logo.png"}
                            alt="Profile Picture"
                        />
                    </div>
                    <div id="memberData">
                        <div id="name">
                            <h1 id="label">Name:</h1>
                            <h1 id="person">Dev Rakatoo</h1>
                        </div>
                        <div id="role">
                            <h1 id="label">Role:</h1>
                            <h1 id="person">Chief Executive Officer</h1>
                        </div>
                        <div id="description">
                            <h1 id="label">Description:</h1>
                            <h1 id="person">
                                Dev Rakatoo formed his own practice after
                                working as accountant, financial controller and
                                business consultant in many big companies given
                                that he specializes in accounting and business
                                outsourcing. He has helped many SMES with their
                                administration and with a better optimization of
                                their resources to eventually open doors to many
                                opportunities. His long years of experience
                                makes him the right coach for your business.
                            </h1>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
// Footer class
class Footer extends DevRakatoo {
    // Render method
    render() {
        // Variables
        let domain = "http://stormysystem.ddns.net/Rakatoo Associates Limited";
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
                <div id="copyright">Rakatoo Associates Ltd © 2021</div>
            </footer>
        );
    }
}
// Rendering Dev Rakatoo
ReactDOM.render(<DevRakatoo />, document.getElementById("app"));
