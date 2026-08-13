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
                    <span className="bio">I'm a Brazilian <strong className='orange'>software engineer</strong> with over 3 years of experience building robust and scalable applications. Based in Rio de Janeiro, I'm driven by a passion for system architecture, clean code, and solving complex problems through technology.</span>
                    <span className="bio">I hold a Computer Science degree from the <a href='https://internacional.ufrj.br/en/study-at-ufrj' target="_blank" rel='noreferrer' className='orange'>Universidade Federal do Rio de Janeiro (UFRJ)</a>. Currently, I am a Software Engineer at <a href='https://bigdatacorp.com.br/sobre-a-bigdatacorp' target="_blank" rel='noreferrer' className='orange'>BigDataCorp</a>, where I contribute to the architecture and development of core billing and monetization systems, taking ownership of front-end and back-end features for our internal systems. My background also includes scientific research with <strong className='orange'>COPPETEC</strong> and <strong className='orange'>UFRJ</strong>, tackling large-scale data pipelines and educational technology.</span>                   
                    <span className="bio">Core technologies I work with:</span>
                    <div className="techs">
                        {techs.map(tech => (
                            <span>{tech}</span>
                        ))}
                    </div>
                    <span className="bio" style={{marginTop: '10px'}}>Beyond coding, I am a native Portuguese speaker, fluent in English (C2), and currently learning Italian. In my free time, I enjoy playing the guitar and gaming (Valorant, Chess, and League of Legends).</span>
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