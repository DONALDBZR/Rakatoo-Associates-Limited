// Importing Prerequisities
import Header from "./Header";
import Footer from "./Footer";
// Main class
class Main extends React.Component {
    // Render method
    render() {
        return (
            <main>
                <div id="welcomeText">
                    <h2>Welcome to</h2>
                    <h1>Rakatoo Associates Ltd</h1>
                </div>
                <div id="animation">
                    <img src="./Images/HomepageAnimation.gif" />
                </div>
            </main>
        );
    }
}
// Homepage class
class Homepage extends React.Component {
    // Render method
    render() {
        return [<Header />, <Main />, <Footer />];
    }
}
// Rendering Homepage
ReactDOM.render(<Homepage />, document.getElementById("app"));
