import { Fade } from "react-awesome-reveal";
import { useState } from "react"

const Experience = () => {

    const defaultTexts = [ 
        {
            title: "Machine Teaching",
            role: "Undergraduate Researcher",
            date: 'FEB 2022 - NOW',
            task: [
                "Selected for a CNPq-funded fellowship to advance an educational platform used by hundreds of STEM students. My work involved optimizing performance, such as rewriting database queries to reduce dashboard page load times by up to 80%.",
                "I led the development of a synchronous assessment module for my capstone thesis, created automated tests to ensure system reliability, and <a>co-authored a peer-reviewed paper</a>, presenting research at academic conferences like SIAc and JICTAC. href=https://journals-sol.sbc.org.br/index.php/rbie/article/view/4479"
            ]
        },
        {
            title: "COPPETEC",
            role: "ETL Researcher",
            date: 'JUN 2023 - NOW',
            task: [
                "Contributed to a large-scale data management project for a state public defender's office, ensuring the reliability of data pipelines. I personally designed new and modified existing jobs within a large-scale ETL pipeline of over 40 Talend jobs.",
                "I led an initiative to containerize the Talend development environment using Docker, eliminating cross-platform dependency issues. This role has enhanced my skills in SQL (SQL Server/PostgreSQL), Java, and working under the Scrum methodology."
            ]
        },
        {
            title: "BigDataCorp",
            role: "Software Engineer Intern",
            date: "JUN 2024 - DEC 2025",
            task: [
                "As an intern on the Billing & Monetization team, I develop and modernize full-stack solutions. I have built key features for internal administrative panels using .NET for APIs and responsive React components for the front-end.",
                "I am actively contributing to a major platform modernization effort by refactoring legacy code and migrating essential UI components to a more maintainable and efficient React and Redux architecture, improving system reliability."
            ]
        },
        {   
            title: "BigDataCorp",
            role: "Jr. Software Engineer",
            date: 'JAN 2026 - NOW',
            task: [
                "Stepping into a full-time role, I am now responsible for the user-facing Billing infrastructure, managing the complex data flows of contracts, invoices, and reports that drive our Sales and Finance operations.",
                "This transition has shifted my focus toward strategic technical discovery, where I collaborate directly with internal leaders to transform high-level business needs into detailed architectural logic and proactive project scoping.",
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
 
export default Experience;