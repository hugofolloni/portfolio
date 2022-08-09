import profile from "./assets/profile.jpeg"
import github from "./assets/github.svg"
import linkedin from "./assets/linkedin.svg"
import twitter from "./assets/twitter.svg"
import newspaper from "./assets/newspaper-solid.svg"
import instagram from "./assets/instagram.svg"
import resume from "./assets/resume.pdf"
import { HashLink } from 'react-router-hash-link';

import brFlag from "./assets/brFlag.png"
import uksFlag from "./assets/uksFlag.png"
import SetTheme from './SetTheme';

const Home = () => {

    return ( 
        <div className="home" id='home'>
            <div className="left">
                <div className="title">
                    <h1>Hugo Folloni</h1>
                </div>
                <div className="description">
                    <h3>Desenvolvedor fullstack e estudante de Ciência da Computação.</h3>
                </div>
                <div className="button-hire-me">
                    <HashLink className='button' smooth to="/#contact">Contato</HashLink>
                </div>
            </div>
            <div className="right">
                <div className="profile-pic">
                    <div className="mobile-links">
                        <a className='flags' href='/english'><img src={ uksFlag } alt="" /></a>
                        <SetTheme />
                    </div>
                    <img className='profile-img' src={ profile } alt="profile-pic"/>
                    <div className="links-home">
                        <a href={resume} target='_blank'  rel="noreferrer"><img src={ newspaper } alt="gh"/></a>
                        <a href="https://github.com/hugofolloni" target='_blank'  rel="noreferrer"><img src={ github } alt="gh" /></a>
                        <a href="https://linkedin.com/in/hugofolloni" target='_blank'  rel="noreferrer"><img src={ linkedin } alt="gh"/></a>
                        <a href="https://twitter.com/hugofolloni" target='_blank'  rel="noreferrer"><img src={ twitter } alt="gh"/></a>
                        <a href="https://instagram.com/hugofolloni" target='_blank'  rel="noreferrer"><img src={ instagram } alt="gh"/></a>
                    </div>
                    <div className="background-circle"></div>
                </div>
            </div>
        </div>
     );
}


// // // // // // //


const EnHome = () => {
    return ( 
        <div className="home" id='home'>
            <div className="left">
                <div className="title">
                    <h1>Hugo <br/> Folloni</h1>
                </div>
                <div className="description">
                    <h3>Fullstack developer and Computer Science student.</h3>
                </div>
                <div className="button-hire-me">
                <HashLink className='button' smooth to="/#contact">Contact</HashLink>
                </div>
            </div>
            <div className="right">
                <div className="profile-pic">
                    <div className="mobile-links">
                        <a className='flags' href='../'><img src={ brFlag } alt="" /></a>
                        <SetTheme className='mobile-links-content' />
                    </div>
                    <img className='profile-img' src={ profile } alt="profile-pic"/>
                    <div className="links-home">
                        <a href="https://github.com/hugofolloni" target='_blank'  rel="noreferrer"><img src={ github } alt="gh"/></a>
                        <a href="https://linkedin.com/in/hugofolloni" target='_blank'  rel="noreferrer"><img src={ linkedin } alt="gh"/></a>
                        <a href="https://twitter.com/hugofolloni" target='_blank'  rel="noreferrer"><img src={ twitter } alt="gh"/></a>
                        <a href="https://instagram.com/hugofolloni" target='_blank'  rel="noreferrer"><img src={ instagram } alt="gh"/></a>
                    </div>
                    <div className="background-circle"></div>
                </div>
            </div>
        </div>
     );
}

export { Home, EnHome };
