import { Fade } from "react-awesome-reveal";
import { useState } from "react"

const Experience = () => {

    const defaultTexts = [ 
        {
            title: "Machine Teaching",
            role: "Undergraduate Researcher",
            date: 'FEB 2022 - NOV 2025',
            task: [
                "Selected for a CNPq-funded fellowship to advance an educational platform used by hundreds of STEM students. Optimized system performance by rewriting database queries to reduce dashboard page load times by up to 80%.",
                "Led the development of a synchronous assessment module for my capstone thesis, created automated tests to ensure system reliability, and co-authored a peer-reviewed paper accepted at WEI 2026, presenting research on competency-driven autograder frameworks. href=https://doi.org/10.5753/wei.2026.21827"
            ]
        },
        {
            title: "COPPETEC",
            role: "ETL Researcher",
            date: 'JUN 2023 - JAN 2026',
            task: [
                "Contributed to a large-scale data management project for a state public defender's office, ensuring the reliability of data pipelines by designing and modifying over 40 Talend jobs.",
                "Led an initiative to containerize the Talend development environment using Docker, eliminating cross-platform dependency issues and streamlining the team's workflow under Scrum methodologies."
            ]
        },
        {
            title: "BigDataCorp",
            role: "Software Engineer Intern",
            date: "JUN 2024 - DEC 2025",
            task: [
                "Developed and modernized full-stack solutions on the Billing & Monetization team, building administrative panels using .NET APIs and responsive React components.",
                "Contributed to a major platform modernization effort by refactoring legacy code and migrating UI components to a maintainable React and Redux architecture."
            ]
        },
        {   
            title: "BigDataCorp",
            role: "Software Engineer",
            date: 'JAN 2026 - NOW',
            task: [
                "Took on technical ownership of the core billing and monetization ecosystem, architecting internal web applications and REST APIs serving executive leadership, Sales, and Finance operations.",
                "Engineered scalable full-stack features handling high-volume multi-client data flows, translating complex financial logic into clean, intuitive experiences using .NET, C#, and React.",
            ],
        }
    ]
    .reverse()

    const [texts, setTexts] = useState(defaultTexts[0])
    const [current, setCurrent] = useState(0)

    return ( 
        <div className="table-wrapper">
            <Fade direction='left' distance={"30px"}>
                <div className="xp">
                    <h2 className="title">~ experience</h2>
                    <div className="jobs-area">
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
                                                {value.split('co-authored')[0]}
                                                <a href={value.split('href=')[1]} target="_blank" rel="noreferrer" className="orange">co-authored a peer-reviewed paper</a>
                                                {value.split('paper')[1].split('href=')[0]}
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
 
export default Experience;