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
                        <a href="../AboutUs/"> About Us </a>
                    </div>
                    <div>
                        <a href="./"> Our Services </a>
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
        return (
            <main>
                <h1>Services offered by the company</h1>
                <div id="services">
                    <div id="accounting">
                        <h1>Accounting</h1>
                        <div>
                            We record financial transactions pertaining to your
                            business as it includes summarizing, analyzing, and
                            reporting these transactions to oversight agencies,
                            regulators and tax collection entities.
                        </div>
                    </div>
                    <div id="payrollManagement">
                        <h1>Payroll Management</h1>
                        <div>
                            We provide payroll management where we do the
                            process of administration of your company's
                            employee's financial records where we include
                            details of the employee's salaries, incentives,
                            bonuses, deductions and net pay.
                        </div>
                    </div>
                    <div id="taxation">
                        <h1>Taxation</h1>
                        <div>
                            We process your taxation by declaring the resulting
                            revenue.
                        </div>
                    </div>
                    <div id="feasibilityStudies">
                        <h1>Feasibility Studies</h1>
                        <div>
                            We analyzes all of your project's relevant factors
                            including economic, technical, legal, and scheduling
                            considerations to ascertain the likelihood of
                            completing your project successfully.
                        </div>
                    </div>
                    <div id="businessPlanning">
                        <h1>Business Planning</h1>
                        <div>
                            We write the document that describes your business
                            idea and all the relevant internal along with
                            external elements involved in launching your new
                            project by describing its nature and context of your
                            business opportunities as well as the plans to
                            exploit the opportunity.
                        </div>
                    </div>
                    <div id="advisory">
                        <h1>Advisory</h1>
                        <div>
                            We provide financial expertise and insights that
                            steer you toward long-term growth and profitability.
                        </div>
                    </div>
                    <div id="consulting">
                        <h1>Consulting</h1>
                        <div>
                            We provide you with services that help you to
                            analyze financial information so that you can make
                            important business decisions.
                        </div>
                    </div>
                    <div id="businessDiagnosis">
                        <h1>Business Diagnosis</h1>
                        <div>
                            We identify reasons for unsatisfactory performance
                            by making the appropriate links between causes and
                            effects.
                        </div>
                    </div>
                </div>
            </main>
        );
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
                        <i class="fa fa-facebook faFacebook"></i>
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
