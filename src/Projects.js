import { Fade } from "react-awesome-reveal";
import { useEffect, useRef, useState } from "react"
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import styled, {keyframes} from "styled-components";

import wiki from './assets/wiki.png'
import multiverse from './assets/multiverse.png'
import profileapp from './assets/profileapp.png'
import vinyl from './assets/vinyl.png'
import wedding from './assets/wedding.png'

const Projects = () => {

    const projectsInfos = [
        {
            title: 'vinyl-scrobbler',
            photo: vinyl,
            description: 'a full-stack ecosystem bridging physical vinyl playback with digital tracking. Built with a .NET 9 backend featuring Last.fm/Spotify OAuth integrations and an Amazon Alexa webhook for voice-activated scrobbling, paired with a dynamic React 19 web dashboard tracking playback in real time.',
            github: 'https://github.com/hugofolloni/vinyl-scrobbler-api',
            link: 'https://github.com/hugofolloni/vinyl-scrobbler-web',
            tools: [
                'C#',
                '.NET 9',
                'React 19',
                'TypeScript',
                'Last.fm API',
                'Alexa Webhook'
            ]
        },
        {
            title: 'yze-bio',
            photo: profileapp,
            description: 'a fully customizable profile card system enabling users to display social links, favorite media, and custom themes with adjustable layout positioning and styling controls.',
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
            description: "a full-stack music discovery engine that uses mathematical analysis to extract core audio features from a user's favorite playlist, running scikit-learn models to surface similar, appealing tracks.",
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
            description: 'an algorithmic linear algebra project that categorizes Wikipedia articles based on URL and content vector similarities using cosine distance calculations, optimizing retrieval efficiency through request caching.',
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
        }
    ]

    const minorProjects = [
        {
            title: 'wedding-gifts',
            photo: wedding,
            description: 'a comprehensive wedding gift manager and API allowing couples to curate registries while guests securely select, purchase items, and execute payments via automatically generated PIX codes.',
            github: 'https://github.com/hugofolloni/wedding-gifts',
            link: 'https://wedding-manager.netlify.app',
            tools: [
                'JavaScript',
                'React',
                'PostgreSQL',
                'NodeJS',
                'Express'
            ]
        },
        {
            title: 'tagnalyzer',
            description: 'a web application providing Last.fm users with granular insights into their listening history by aggregating and analyzing artist tags.',
            github: 'https://github.com/hugofolloni/tagnalyzer',
            link: 'https://tagnalyzer.vercel.app',
            tools: [
                'TypeScript',
                'React',
                'Next.js',
                'Sass',
                'Redux'
            ]
        },
        {
            title: 'react-stars-particles',
            description: 'an interactive React component rendering a dynamic galaxy background with mouse-tracking particle animations and smooth scaling performance.',
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
            description: 'an endless-mode word-guessing game inspired by popular daily word puzzles, allowing users to play continuously without daily restrictions.',
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
            description: 'a daily character-guessing game utilizing public APIs and Python processing scripts to serve randomized blurred anime portraits.',
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
            description: 'a fully functional chess engine implemented in Python using Pygame, incorporating custom rule validation logic and move-prediction algorithms.',
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
            description: 'an interactive utility bot for Discord supporting audio playback, minigames, live weather tracking, and space mission updates.',
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
                    <Fade direction='down' triggerOnce>
                        <h2 className="title">~ projects</h2>
                    </Fade>
                    <div className="projects-area">
                        {
                            projectsInfos.map((item, index) => (
                                <div className="project-container" key={index}>
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
        white-space: nowrap;
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
        if (!ref.current) return;
        var calculatedSize = 15;
        for(let i = 0; i < ref.current.children.length / 2; i++){
            calculatedSize += ref.current.children[i].offsetWidth
            calculatedSize += 7
        }
        setSize(calculatedSize)
        setSpeed(ref.current.children.length)
    }, [])

    const item = props.item;

    return (
        <Fade style={{width: '100%', height:'100%'}} direction='right' distance={"30px"} triggerOnce> 
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
                        {item.tools.map((tool, idx) => (
                            <Tool key={idx}>{tool}</Tool>
                        ))}
                        {item.tools.map((tool, idx) => (
                            <Tool key={`dup-${idx}`}>{tool}</Tool>
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
        if (!ref.current) return;
        var calculatedSize = 15;
        for(let i = 0; i < ref.current.children.length / 2; i++){
            calculatedSize += ref.current.children[i].offsetWidth
            calculatedSize += 7
        }
        setSize(calculatedSize)
        setSpeed(ref.current.children.length)
    }, [])

    const item = props.item;
    return (
        <Fade style={{width: '100%', height:'100%'}} direction='left' distance={"30px"} triggerOnce> 
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
                        {item.tools.map((tool, idx) => (
                            <Tool key={idx}>{tool}</Tool>
                        ))}
                        {item.tools.map((tool, idx) => (
                            <Tool key={`dup-${idx}`}>{tool}</Tool>
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
                <Fade key={index} direction="down" delay={index * 100} className='fade-div'>
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
                        <Fade direction="down" duration={300}>
                            <div className="minor-project-expand">
                                <span className='minor-project-description'>{item.description}</span>
                                <div className="minor-projects-footer">
                                    <div className="minor-projects-tools">
                                        {item.tools.map((tool, idx) => (
                                            <div className='tool' key={idx}>{tool}</div>
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
                </Fade>
            ))}
        </div>
    )
}
 
export default Projects;