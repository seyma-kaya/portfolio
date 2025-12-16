import '../styling/style.css'
import {Link} from "react-router-dom";
import seniorfit from "../img/senior-fit.png";
import mediamarkt from "../img/media_markt.png";

function App() {
    return (
        <div>
            <div className="main">
                <header>
                    <div className="header-information">
                        <h1>Hi, I am Seyma Kaya!</h1>
                        <ul>
                            <li><a>💻 Software Engineering student at University of Applied Sciences</a><a
                                className="secondary-text"> ~ 4th year</a></li>
                            <li><a>📍 The Netherlands, fluent in Dutch, English and Turkish</a></li>
                            <li><a>🪷 Check the links down here for more info!</a></li>
                        </ul>
                        <div className="header-links">
                            <Link className="link" to="" target="_blank">CV | Resume</Link>
                            <Link className="link" to="https://www.linkedin.com/in/seyma-kaya-06558824a/"
                                  target="_blank">LinkedIn</Link>
                        </div>
                    </div>
                </header>
                <div className="projects-body">
                    <h2>
                        Take a look at all my projects!
                    </h2>
                    <div className="projects">
                        <Link to="/mediamarkt" className="project-title">
                            <img src={mediamarkt}/>
                            <div className="project-cb">MediaMarkt: Communication Bazaar</div>
                        </Link>
                        <Link to="/seniorfit" className="project-title">
                            <img src={seniorfit}/>
                            <div className="project-sf">Senior Fit.</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
