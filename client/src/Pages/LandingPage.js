import Experience from "./Experience";
import Projects from "./Projects";
import { Link } from "react-router-dom";
import Education from "./Education";

export default function LandingPage(){
    return(
        <>
        <body>
        <div class="intro">
        <div class="column">
        <div class="row"> 
        <img src="https://i.imgur.com/S1ZRIJp.png" />
        </div>  
        <div class="row">
        <img src="https://i.imgur.com/onwDQdn.png" />
        </div>
        </div>
        </div>

        <br />
        <br />
        <br />
        <div class="buttons">
        <Link to="https://www.linkedin.com/in/han-tang-49ba799b/"><button class="linkedin">LinkedIn</button></Link>
        <button class="github">GitHub</button>
        </div>
        </body>

        <main class="landing">
        <br />
        <hr />
        <Projects />
        <hr />
        <Experience />
        <hr />
        <Education />
        <hr />
        <h2>Want to work with me?</h2>
        <h3>Connect with me on LinkedIn!</h3>
        <Link to="https://www.linkedin.com/in/han-tang-49ba799b/"><button class="linkedin">LinkedIn</button></Link>
        <hr />
        </main>
        </>
    )
}