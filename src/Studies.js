import { Fade } from "react-awesome-reveal";
import { useState } from "react"

const Studies = () => {

    const defaultTexts = [ 
        {
            title: "Universidade Federal do Rio de Janeiro",
            role: "Computer Science",
            date: 'FEB 2021 - NOV 2025',
            task: [
                "I gained strong foundations in algorithms, data structures, and system design. Through coursework and projects, I have developed practical experience in software development and complex problem-solving.",
                "My studies culminated in the development of a <a>capstone thesis</a> on a synchronous assessment module for educational platforms, showcasing my ability to lead a project from conception to completion. href=/thesis.pdf"
            ]    
        }
    ]
    .reverse()

    const [texts, setTexts] = useState(defaultTexts[0])
    const [current, setCurrent] = useState(0)


    return ( 
        <div className="table-wrapper">
            <Fade direction='right' distance={"30px"}>
                <div className="studies">
                    <h2 className="title">~ studies</h2>
                    <div className="studies-area">
                        <div className="selector">
                            { defaultTexts.map((item, index) => (
                                (
                                    current === index && (
                                        <div onClick={() => {setTexts(defaultTexts[index]); setCurrent(index)}} className="items-selected"><span>{item.title}</span></div>
                                    )
                                )
                                || 
                                (
                                    <div onClick={() => {setTexts(defaultTexts[index]); setCurrent(index)}} className="items">
                                        <span>{item.title}</span>
                                    </div>    
                                )      
                            ))}
                        </div>
                        <div className="table-infos">
                            <span className='table-title'><strong>{texts.role}</strong> <strong className="orange">@ {texts.title}</strong></span>
                            <span className="table-duration">{texts.date}</span>
                            <div className="table-all-tasks">
                                {texts.task.map((value, index) => {
                                    if (value.includes("<a>")) {
                                        return (
                                            <span key={index} className="table-task">
                                                {value.split('<a>')[0]}
                                                    <a href={value.split('href=')[1]} target="_blank" rel="noreferrer" className="orange">{value.split('<a>')[1].split('</a>')[0]}</a>
                                                {value.split('</a>')[1].split('href=')[0]}
                                            </span>
                                        )
                                    }
                                    return <span key={index} className="table-task">{value}</span>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div> 
 );
}
 
export default Studies;