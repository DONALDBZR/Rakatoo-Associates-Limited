// Header class
class Header extends React.Component {
    // Render method
    render() {
        return (
            <header>
                <div id="companyLogo">
                    <a href="./">
                        <img src="./Images/Logo.png" />
                    </a>
                </div>
                <nav>
                    <div>
                        <a href="./AboutUs/"> About Us </a>
                    </div>
                    <div>
                        <a href="./OurServices/"> Our Services </a>
                    </div>
                </nav>
            </header>
        );
    }
}
export default Header;