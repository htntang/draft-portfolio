import Experience from "./Experience";
import Projects from "./Projects";
import { Link } from "react-router-dom";
import Education from "./Education";

export default function LandingPage(){
    return(
        <>
        <body>
        <img class="hello" src="https://i.imgur.com/S1ZRIJp.png" />
        <img class="intro" src="https://i.imgur.com/onwDQdn.png" />

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