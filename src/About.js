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

    const techs = ["JavaScript", "React.js", "Python", "TypeScript", "C#", ".NET", "PostgreSQL", "MongoDB"]

    return ( 
        <div className="session-wrapper">
            <ParallaxProvider>
            <Fade direction='down' fraction={0.3}>
                <div className="about">
                    <h2 className="title">~ about-me</h2>
                    <span className="bio">I'm a brazilian <strong className='orange'>software engineer</strong> based in Rio de Janeiro. Self-taught and curious, I always want to learn new things. I love to <strong className='orange'>solve problems</strong> and think rationally about them, and that's why I love to code.</span>
                    <span className="bio">I study Computer Science at <a href='https://internacional.ufrj.br/en/study-at-ufrj' target="_blank" rel='noreferrer' className='orange'>Universidade Federal do Rio de Janeiro</a>, one of the most prestigious universities in Brazil. Besides, I am a software engineer intern at <a href='https://bigdatacorp.com.br/sobre-a-bigdatacorp' target="_blank" rel='noreferrer' className='orange'>BigDataCorp</a>. Also, I currently{/*  an Intern at <strong className='orange'>BigDataCorp</strong>, my main goal is to develop myself every day. Also*/} work under <strong className='orange'>COPPETEC</strong> and <strong className='orange'>UFRJ</strong> scientific projects, learning a lot about the most diverse areas of technology and development.</span>
                    <span className="bio">I have abillities on the following tools:</span>
                    <div className="techs">
                        {techs.map(tech => (
                            <span>{tech}</span>
                        ))}
                    </div>
                    <span className="bio" style={{marginTop: '10px'}}>Furthermore, I speak Portuguese fluently as my native language, and I am also fluent in English. I'm currently trying to learn Italian as well.</span>
                    <span className="bio">Also, I spend most of my free time playing guitar and playing some games such as Valorant, Chess and League of Legends.</span>
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