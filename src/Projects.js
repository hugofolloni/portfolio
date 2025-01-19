import { Fade } from "react-awesome-reveal";
import { useEffect, useRef, useState } from "react"
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import styled, {keyframes} from "styled-components";

import wedding from './assets/wedding.png'
import wiki from './assets/wiki.png'
import multiverse from './assets/multiverse.png'
import profileapp from './assets/profileapp.png'



const Projects = () => {

    const projectsInfos = [
        {
            title: 'yze-bio',
            photo: profileapp,
            description: 'a "create your card" system, where the user can create profiles to display infos about himself, linking social medias and showing his favorite song and GIF. The design is fully customizable, allow the creator to change colors, fonts and positions of items on screen.',
            github: 'https://github.com/hugofolloni/yze-bio',
            link: 'https://yze.bio',
            tools: [
                'JavaScript',
                'React',
                'C#',
                '.NET',
                'PostgreSQL',
            ]
        },
        {
            title: 'spotify-multiverse',
            photo: multiverse,
            description: "a full-stack application that helps users discover new songs based on a playlist they already love. Through mathematical analysis, the project extracts the essential elements of the user's favorite songs, enabling the search for other tracks that will also be appealing.",
            github: 'https://github.com/hugofolloni/spotify-multiverse',
            link: 'https://spotify-multiverse.netlify.app',
            tools: [
                'JavaScript',
                'React',
                'PostgreSQL',
                'Python',
                'Flask',
                'NumPy',
                'Sklearn'
            ]
        },
        {
            title: 'wiki-analysis',
            photo: wiki,
            description: 'a final project for Algorithmic Linear Algebra. It aims to categorize Wikipedia articles based on their URL and similar articles using linear algebra comparisons. The project utilizes cosine similarity between article vectors to determine categories and improves efficiency by learning from requests.',
            github: 'https://github.com/hugofolloni/wiki-analysis',
            link: 'https://wiki-analysis.netlify.app',
            tools: [
                'TypeScript',
                'React',
                'NodeTS',
                'Python',
                'PostgreSQL',
                'BeautifulSoup',
                "NumPy",
                "Express"
            ]
        },
        {
            title: 'wedding-gifts',
            photo: wedding,
            description: 'a comprehensive web application with an API designed to streamline wedding gift management. Couples can easily add gifts to the list and track who has chosen to purchase each item. Guests have access to an organized list of gifts, allowing them to choose, purchase, and pay via an automatically generated PIX code.',
            github: 'https://github.com/hugofolloni/wedding-gifts',
            link: 'https://wedding-manager.netlify.app',
            tools: [
                'JavaScript',
                'React',
                'PostgreSQL',
                'NodeJS',
                'Express'
            ]
        }
    ]

    const minorProjects = [
        {
            title: 'react-stars-particles',
            description: 'a captivating React component that brings a dynamic and interactive galaxy background to your web pages. With stars that are attracted to the mouse pointer and smooth animations, it offers a unique and engaging user experience.',
            github: 'https://github.com/hugofolloni/react-stars-particles',
            link: 'https://galaxysimulator.netlify.app',
            tools: [
                'JavaScript',
                'React',
                'NodeJS',
                'Rollup'
            ]
        },
        {
            title: 'word.zzz',
            description: 'A game where you try to guess the word based on your previous attempts, like wordle or term.ooo. It allows user to play non-stop, instead of daily playing like others.',
            github: 'https://github.com/hugofolloni/word.zzz',
            link: 'https://wordzzz.netlify.app',
            tools: [
                'JavaScript',
                'React',
                'Styled Components',
            ]
        },
        {
            title: 'anigme',
            description: 'A game to guess who is the anime character behind the blur photo. It uses a public API to select the character and changes it every day.',
            github: 'https://github.com/hugofolloni/anigme',
            link: 'https://anigme.netlify.app',
            tools: [
                'JavaScript',
                'React',
                'Python',
                "CSV"
            ]
        },
        {
            title: 'stockglass',
            description: 'implementation of a chess game with Pygame, featuring classes for the game, pieces, and the board. It utilizes algorithms to make computer moves. The game logic manages moves, checks, and interactions, while the graphical interface displays the board and allows interactive gameplay.',
            github: 'https://github.com/hugofolloni/wiki-analysis',
            link: '',
            tools: [
                'Python',
                'Pygame',
                'Numpy',
            ]
        },
        {
            title: 'heyo-discord-bot',
            description: 'an interactive bot for Discord that allows users to listen to music, play some games and get infos about weather and space missions.',
            github: 'https://github.com/hugofolloni/heyo-discord-bot',
            link: '',
            tools: [
                'JavaScript',
                'NodeJS',
                'DiscordJS'
            ]
        }
    ]

    return ( 
        <div className="projects-wrapper" style={{overflow: 'hidden'}}>
                <div className="projects">
                    <h2 className="title">~ projects</h2>
                    <div className="projects-area">
                        {
                            projectsInfos.map((item, index) => (
                                <div className="project-container">
                                    {   (index % 2 === 0 
                                            &&
                                        <LeftProject item={item}/>)
                                            || 
                                        <RightProject item={item}/>
                                    }
                                </div>
                            ))
                        }
                    </div>

                    <MinorProjects projects={minorProjects} />
                </div>
        </div> 
    );
}

const LeftProject = (props) => {
    
    const ref = useRef(null)

    const Tool = styled.div`  
        background-color:#0D0024;
        color: white;
        margin: 5px;
        border-radius: 6px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 10px;
        font-size: 16px;
        `
        
    const [size, setSize] = useState(0)
    const scroll = keyframes`
        0% { transform: translateX(0px); }
        100% { transform: translateX(-${size}px)}
    `

    const [speed, setSpeed] = useState(10)
    const SlideTrack = styled.div`
        animation: ${scroll} ${speed}s linear infinite; 
        display: flex;
        width: 100%;
        flex-direction: row;
    `       

    useEffect(() => {
        var size = 15;
        for(let i = 0; i < ref.current.children.length / 2; i++){
            size += ref.current.children[i].offsetWidth
            size += 7
        }
        setSize(size)
        setSpeed(ref.current.children.length)
    }, [])

    const item = props.item;

    return (
        <Fade style={{width: '100%', height:'100%'}} direction='right' distance={"30px"}> 
            <div className="left-project">
                <div className="project-image-wrapper"><img src={item.photo} alt="" /><div className="grainy"/></div>
                <div className="left-project-description">
                    <div className="orange">{item.title}</div>
                    <span>{item.description}</span>
                </div>
                <div className="left-project-links">
                    {item.link !== "" && <a href={item.link} target='_blank' rel='noreferrer'>
                        <LaunchIcon className='icon'/>          
                    </a>}
                    {item.github !== "" && <a href={item.github} target='_blank' rel='noreferrer'>
                        <GitHubIcon className='icon'/>          
                    </a>}
                </div>
                <div className="left-project-tools">
                    <SlideTrack ref={ref}>
                        {item.tools.map((item) => (
                            <Tool>{item}</Tool>
                        ))}
                        {item.tools.map((item) => (
                            <Tool>{item}</Tool>
                        ))}
                    </SlideTrack>
                </div>
            </div>
        </Fade>
    )
}

const RightProject = (props) => {
    const ref = useRef(null)

    const Tool = styled.div`  
        background-color:#0D0024;
        color: white;
        margin: 5px;
        border-radius: 6px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 10px;
        font-size: 16px;
        `
        
    const [size, setSize] = useState(0)
    const scroll = keyframes`
        0% { transform: translateX(0px); }
        100% { transform: translateX(${size}px)}
    `


    const [speed, setSpeed] = useState(10)
    const SlideTrack = styled.div`
        animation: ${scroll} ${speed}s linear infinite; 
        display: flex;
        width: 100%;
        flex-direction: row-reverse;
    `       

    useEffect(() => {
        var size = 15;
        for(let i = 0; i < ref.current.children.length / 2; i++){
            size += ref.current.children[i].offsetWidth
            size += 7
        }
        setSize(size)
        setSpeed(ref.current.children.length)
    }, [])

    const item = props.item;
    console.log(item)
    return (
        <Fade style={{width: '100%', height:'100%'}} direction='left' distance={"30px"}> 
            <div className="right-project">
                <div className="project-image-wrapper"><img src={item.photo} alt="" /><div className="grainy"/></div>
                <div className="right-project-description">
                    <div className="orange">{item.title}</div>
                    <span>{item.description}</span>
                </div>
                <div className="right-project-links">
                   {item.link !== "" && <a href={item.link} target='_blank' rel='noreferrer'>
                        <LaunchIcon className='icon'/>          
                    </a>}
                    {item.github !== "" && <a href={item.github} target='_blank' rel='noreferrer'>
                        <GitHubIcon className='icon'/>          
                    </a>}
                </div>
                <div className="right-project-tools">
                    <SlideTrack ref={ref}>
                        {item.tools.map((item) => (
                            <Tool>{item}</Tool>
                        ))}
                        {item.tools.map((item) => (
                            <Tool>{item}</Tool>
                        ))}
                    </SlideTrack>
                </div>
            </div>
    </Fade> 
    )
}

const MinorProjects = (props) => {
    const [minorProjectIndex, setMinorProjectIndex] = useState()

    return (
        <div className="minor-projects-area">
            {props.projects.map((item, index) => (
                <div className="minor-project">
                    <div className="minor-project-title"  onClick={() => {
                            if(index !== minorProjectIndex){
                                setMinorProjectIndex(index);
                            }
                            else {
                                setMinorProjectIndex()
                            }
                        }}>
                        <span className='orange'>{item.title}</span>
                        { (index === minorProjectIndex && <span className="orange">-</span>) || <div className="orange">+</div>}
                    </div>
                    { index === minorProjectIndex && (
                    <Fade direction="down" duration={500}>
                        <div className="minor-project-expand">
                            <span className='minor-project-description'>{item.description}</span>
                            <div className="minor-projects-footer">
                                <div className="minor-projects-tools">
                                    {item.tools.map((item) => (
                                        <div className='tool'>{item}</div>
                                    ))}
                                </div>
                                <div className="minor-projects-links">
                                    {item.link !== "" && <a href={item.link} target='_blank' rel='noreferrer'>
                                        <LaunchIcon className='icon'/>          
                                    </a>}
                                    {item.github !== "" && <a href={item.github} target='_blank' rel='noreferrer'>
                                        <GitHubIcon className='icon'/>          
                                    </a>}
                                </div>
                            </div>
                        </div>
                    </Fade>
                    )}
                </div>
            ))
        }
        </div>
    )
}
 
export default Projects;