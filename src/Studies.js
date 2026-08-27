import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { motion } from "framer-motion";

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

    const [current, setCurrent] = useState(0);
    const texts = defaultTexts[current];

    return ( 
        <div className="table-wrapper">
            <Fade direction='right' distance={"30px"}>
                <div className="studies">
                    <h2 className="title">~ studies</h2>
                    <div className="studies-area">
                        <div className="selector" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {defaultTexts.map((item, index) => {
                                const isSelected = current === index;
                                return (
                                    <div 
                                        key={index}
                                        onClick={() => setCurrent(index)} 
                                        className="items"
                                        style={{ cursor: 'pointer', position: 'relative', zIndex: 1, padding: '10px 14px' }}
                                    >
                                        {isSelected && (
                                            <motion.div
                                                layoutId="studies-pill"
                                                style={{
                                                    position: 'absolute',
                                                    inset: 0,
                                                    zIndex: -1,
                                                    borderLeft: '3px solid #ff5f00',
                                                }}
                                                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                                            />
                                        )}
                                        <span style={{paddingLeft: '10px'}}>{item.title}</span>
                                    </div>    
                                )
                            })}
                        </div>
                        <div className="table-infos">
                            <Fade key={current} triggerOnce direction="up" duration={300} cascade damping={0.12}>
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
                            </Fade>
                        </div>
                    </div>
                </div>
            </Fade>
        </div> 
    );
}
 
export default Studies;