import { Fade } from "react-awesome-reveal";
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import profile from "./assets/profile.jpeg"
import { useEffect, useState } from "react";

const About = () => {

   const [randomZ, setRandomZ] = useState(0);
    useEffect(() =>{
        const define = Math.ceil(Math.random() * 100)
        if(define % 2){
            setRandomZ(-1);
        }
        else{
            setRandomZ(1)
        }
    },[])

    const techs = ["JavaScript", "TypeScript", "React.js", "Next.js", "Python", "C#", ".NET", "PostgreSQL", "MongoDB", "Docker"]

    return ( 
        <div className="session-wrapper">
            <ParallaxProvider>
            <Fade direction='down' fraction={0.3}>
                <div className="about">
                    <h2 className="title">~ about-me</h2>
                    <span className="bio">I'm a brazilian <strong className='orange'>software engineer</strong> with over 3 years of experience building robust applications. Based in Rio de Janeiro, I'm driven by curiosity and a passion for solving complex problems through technology.</span>
                    <span className="bio">I hold a Computer Science degree from the <a href='https://internacional.ufrj.br/en/study-at-ufrj' target="_blank" rel='noreferrer' className='orange'>Universidade Federal do Rio de Janeiro (UFRJ)</a>. Currently, I am a Software Engineer at <a href='https://bigdatacorp.com.br/sobre-a-bigdatacorp' target="_blank" rel='noreferrer' className='orange'>BigDataCorp</a>, where I lead the development of user-facing billing and financial systems. My background is rooted in scientific research with <strong className='orange'>COPPETEC</strong> and <strong className='orange'>UFRJ</strong>, where I solved complex challenges in data management and educational technology.</span>                   
                    <span className="bio">My technical skills include:</span>
                    <div className="techs">
                        {techs.map(tech => (
                            <span>{tech}</span>
                        ))}
                    </div>
                    <span className="bio" style={{marginTop: '10px'}}>Beyond coding, I am a native Portuguese speaker, fluent in English, and currently learning Italian. In my free time, I enjoy playing the guitar and gaming (Valorant, Chess, and League of Legends).</span>
                </div>
            </Fade>
            <Parallax className="photos" speed={-17}>
                <div className="ball" style={{bottom: 0, left: 0, marginBottom: '-50px', marginLeft: '-50px', zIndex: randomZ}}/>
                <div className="ball" style={{top: 0, right: 0, marginTop: '-50px', marginRight: '-50px', zIndex: randomZ * -1}}/>
                <div className="photo-wrapper">
                    <img src={profile} alt="" />
                </div>
            </Parallax>
            </ParallaxProvider>
        </div> 
    );
}
 
export default About;