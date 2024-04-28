import { Fade } from "react-awesome-reveal";
import { useEffect, useRef, useState } from "react"
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import wedding from './assets/wedding.png'
import styled, {keyframes} from "styled-components";

const Projects = () => {

    const projectsInfos = [
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

    return ( 
        <div className="projects-wrapper">
             {/* <Fade direction='up' distance={"30px"}> */}
                <div className="projects">
                    <span className="title">~ projects</span>
                    <div className="projects-area">
                        {
                            projectsInfos.map((item, index) => (
                                <div className="project-container">
                                    {   (index % 2 === 0 
                                            &&
                                        <LeftProject item={item}/>)
                                            || 
                                        <div className=""></div>
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            {/* </Fade> */}
        </div> 
    );
}

const LeftProject = (props) => {
    
    const ref = useRef(null)

    const Tool = styled.div`  
        background-color:#110033;
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


    const SlideTrack = styled.div`
        animation: ${scroll} 10s linear infinite; 
        display: flex;
        width: 100%;
        flex-direction: row;
    `       


    useEffect(() => {
        var size = 20;
        for(let i = 0; i < ref.current.children.length / 2; i++){
            size += ref.current.children[i].offsetWidth
            size += 5
        }
        setSize(size)
    }, [])

    const item = props.item;
    console.log(item)
    return (
        <Fade style={{width: '100%', height:'100%'}} direction='right' distance={"30px"}> 
            <div className="left-project">
                <div className="project-image-wrapper"><img src={item.photo} alt="" /><div className="grainy"/></div>
                <div className="left-project-description">
                    <div className="orange">{item.title}</div>
                    <span>{item.description}</span>
                </div>
                <div className="left-project-links">
                    <a href={item.link}>
                        <LaunchIcon className='icon'/>          
                    </a>
                    <a href={item.github}>
                        <GitHubIcon className='icon'/>          
                    </a>
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
 
export default Projects;