import Experience from "./Experience";
import Projects from "./Projects";

export default function LandingPage(){
    return(
        <>
        <body>
        <h2>Hi, my name is</h2>
        <h1 className="hero-text">Han Tang</h1>
        <h2 className="tagline"><i>full-stack developer, marketing strategist, and content creator</i></h2>
        
        <button class="linkedin">LinkedIn</button>
        <button class="github">GitHub</button>
        </body>
        <br />
        <hr />
        <Projects />
        <hr />
        <Experience />
        <hr></hr>
        <h2>Want to work with me?</h2>
        <h3>Connect with me on LinkedIn!</h3>
        <button class="linkedin">LinkedIn</button>
        <hr />
        </>
    )
}