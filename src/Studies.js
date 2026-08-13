import { Fade } from "react-awesome-reveal";
import { useState } from "react"

const Studies = () => {

    const defaultTexts = [ 
        {
            title: "Universidade Federal do Rio de Janeiro",
            role: "B.S. in Computer Science",
            date: 'FEB 2021 - NOV 2025',
            task: [
                "Built a rigorous foundation in algorithms, data structures, and system design, translating academic theory into practical software engineering problem-solving.",
                "Culminated studies with a capstone thesis on a synchronous assessment module for educational platforms, demonstrating end-to-end technical leadership and project execution. href=https://pantheon.ufrj.br/handle/11422/28387"
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
                                    if (value.includes("href=")) {
                                        return (
                                            <span key={index} className="table-task">
                                                {value.split('capstone thesis')[0]}
                                                <a href={value.split('href=')[1]} target="_blank" rel="noreferrer" className="orange">capstone thesis</a>
                                                {value.split('thesis')[1].split('href=')[0]}
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