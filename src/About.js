import { Fade } from "react-awesome-reveal";
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import profile from "./assets/profile2.jpeg"

const About = () => {
    return ( 
        <div className="session-wrapper">
            <ParallaxProvider>
            <Fade direction='up' distance={"30px"}>
                <div className="about">
                    <span className="title">~ about-me</span>
                    <span className="bio">I'm a brazilian <strong className='green'>software engineer</strong> based in Rio de Janeiro. Self-taught and curious, I always want to learn new things. I love to <strong className='green'>solve problems</strong> and think rationally about them, and that's why I love to code.</span>
                    <span className="bio">Currently an Intern at <strong className='green'>BigDataCorp</strong>, my main goal is to develop myself every day. Also work under <strong className='green'>COPPETEC</strong> and <strong className='green'>UFRJ</strong> scientific projects, learning a lot about the most diverse areas of computation.</span>
                    <span className="bio">I have abillities on the following tools:</span>
                    <div className="techs">
                        <span>JavaScript</span>
                        <span>React.js</span>
                        <span>Python</span>
                        <span>Django</span>
                        <span>TypeScript</span>
                        <span>C#</span>
                        <span>PostgreSQL</span>
                        <span>SQL Server</span>
                    </div>
                    <span className="bio" style={{marginTop: '10px'}}>Furthermore, I speak Portuguese fluently as my native language, and I am also fluent in English. I'm currently trying to learn Italian as well.</span>
                    <span className="bio">Also, I spend most of my free time playing guitar and playing some competitive games such as Valorant and League of Legends.</span>
                </div>
            </Fade>
            <Parallax className="photos" speed={-17}>
                <div className="ball" style={{bottom: 0, left: 0, marginBottom: '-50px', marginLeft: '-50px', zIndex: '-1'}}/>
                <div className="ball" style={{top: 0, right: 0, marginTop: '-50px', marginRight: '-50px'}}/>
                <div className="photo-wrapper">
                    <img src={profile} alt="" />
                </div>
            </Parallax>
            </ParallaxProvider>
        </div> 
    );
}
 
export default About;