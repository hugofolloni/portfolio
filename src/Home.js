import { Fade } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";

const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="home">
                <Fade direction="down">
                    <div className="texts">
                        <span className="main-title">
                            <Typewriter
                                onInit={(typewriter) => {
                                typewriter
                                .typeString('hey,')
                                .pauseFor(500)
                                .typeString(" i'm <strong style='color: #ff5f00'>hugo</strong>!")
                                .start();
                            }}
                            />
                        </span>
                        <span className='subtitle'>I like to build things.</span>
                        <span>Software Engineer and Computer Science student. Passionate about technology since my childhood, made my hobby my job. I'm always trying to learn something new.</span>
                    </div>
                </Fade>
            </div>     
        </div>
    );
}
 
export default Home;